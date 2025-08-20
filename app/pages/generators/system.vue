<script setup lang="ts">

import { ref } from 'vue'
import { type StarSystem } from '~/components/stars/star';
import { useStarStore } from '~/components/stars/state';

const store = useStarStore()

let starSystem = ref<StarSystem | null>(store.getStarSystem)

console.log(starSystem)

function generate() {
    store.generate()
    starSystem.value = store.getStarSystem
}

function undo() {
    store.undo()
    starSystem.value = store.getStarSystem
}

function redo() {
    store.redo()
    starSystem.value = store.getStarSystem
}

function b64(system: StarSystem): string {
    return btoa(JSON.stringify(system))
}
</script>

<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />
                <h1 class="m-1 mb-2 text-2xl font-medium">Star System Generator</h1>
                <div class="grid grids-cols-3 grid-flow-col">
                    <!-- TODO gray out the undo/redo buttons based on the length of their appropriate arrays -->
                    <button type="button" class="bg-green-900 px-1.5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                        @click="undo">
                        &#8592; </button>
                    <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                        @click="generate">
                        Generate
                    </button>
                    <button type="button" class="bg-green-900 px-1.5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                        @click="redo">
                        &#8594;
                    </button>
                </div>
                <StarsSystem v-model:starSystem="starSystem" />
                <a type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1" target="_blank"
                    v-if="starSystem" :href="'/render/system?system=' + b64(starSystem)">
                    Render (WIP)
                </a>
            </div>
        </main>
    </div>
</template>
