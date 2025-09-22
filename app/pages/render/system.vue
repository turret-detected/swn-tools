<script setup lang="ts">
import { RenderStarSystem } from '~/components/stars/render'
import type { StarSystem } from '~/components/stars/star'

import { useStarStore } from '~/components/stars/state';

const store = useStarStore()

let objDecoded: any = {}

// try to use the url param
// if not fail over to the current state
try {
    const route = useRoute()
    const objB64 = route.query["system"]
    objDecoded = JSON.parse(atob(String(objB64)))
} catch (error) {
    console.log(error)
}

let starSystem: StarSystem = {
    name: "ERROR",
    planets: [],
    type: {
        name: "",
        color: ""
    },
}

if ("name" in objDecoded && "planets" in objDecoded && "type" in objDecoded) {
    starSystem = {
        name: objDecoded.name,
        planets: objDecoded.planets,
        type: objDecoded.type
    }
} else {
    const fromStore = store.getStarSystem
    if (fromStore != null) {
        starSystem = fromStore
    }
}

const svgToRender = RenderStarSystem(starSystem).svg()
</script>

<template>
    <div v-html="svgToRender"></div>
    <Download class="bg-green-900 px-2 py-1.5 rounded-xl hover:bg-green-800 m-1" :content="svgToRender" extension="svg"
        :filename="starSystem.name" displayText="Save SVG" />
</template>
