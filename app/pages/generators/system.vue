<script setup lang="ts">

import { ref } from 'vue'
import { GenerateStarSystem, type StarSystem } from '~/components/stars/star';

const starSystem = ref<StarSystem | null>(null)

function generate() {
    starSystem.value = GenerateStarSystem();
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
                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="generate">
                    Generate
                </button>
                <StarsSystem v-model:starSystem="starSystem" />
                <a type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1" target="_blank"
                    v-if="starSystem" :href="'/render/system?system=' + b64(starSystem)">
                    Render (WIP)
                </a>
            </div>
        </main>
    </div>
</template>
