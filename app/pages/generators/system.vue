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

function hasUndo() {
    return store.hasUndo()
}

function hasRedo() {
    return store.hasRedo()
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
                    <button type="button" class="px-1.5 py-1.5 rounded-xl m-1"
                        :class="{ 'bg-green-900 hover:bg-green-800': hasUndo(), 'bg-stone-800 text-stone-600': !hasUndo() }"
                        @click="undo">
                        &#8592; </button>
                    <button type="button" class="px-2 py-1.5 rounded-xl bg-green-900 hover:bg-green-800 m-1"
                        @click="generate">
                        Generate
                    </button>
                    <button type="button" class="px-1.5 py-1.5 rounded-xl m-1"
                        :class="{ 'bg-green-900 hover:bg-green-800': hasRedo(), 'bg-stone-800 text-stone-600': !hasRedo() }"
                        @click="redo">
                        &#8594;
                    </button>
                </div>
                <div class="grid grids-cols-2 grid-flow-col" v-if="starSystem">
                    <a class="bg-green-900 px-2 py-1.5 rounded-xl hover:bg-green-800 m-1" target="_blank"
                        :href="'/render/system?system=' + b64(starSystem)">
                        Render
                    </a>
                    <Download class="bg-green-900 px-2 py-1.5 rounded-xl hover:bg-green-800 m-1"
                        :content="JSON.stringify(starSystem)" extension="json" :filename="starSystem.name"
                        displayText="Export" />
                </div>
                <StarsSystem v-model:starSystem="starSystem" />
            </div>
        </main>
    </div>
</template>
