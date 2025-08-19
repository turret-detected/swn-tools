<script setup lang="ts">
import { RenderStarSystem } from '~/components/stars/render'
import type { StarSystem } from '~/components/stars/star'

const route = useRoute()
const objB64 = route.query["system"]
const objDecoded = JSON.parse(atob(String(objB64)))

const starSystem: StarSystem = {
    name: objDecoded.name,
    planets: objDecoded.planets,
    type: objDecoded.type
}
const svgToRender = RenderStarSystem(starSystem).svg()

</script>

<template>
    <div v-html="svgToRender"></div>
</template>
