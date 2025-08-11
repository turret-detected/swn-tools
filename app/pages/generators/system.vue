<script setup lang="ts">

import { ref } from 'vue'
import { GenerateStarSystem, type StarSystem } from '~/components/stars/star';

const starSystem = ref<StarSystem | null>(null)

function generate() {
    starSystem.value = GenerateStarSystem();
}
</script>

<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />
                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800" @click="generate">
                    Generate Star System
                </button>
                <StarsSystem v-model:starSystem="starSystem" />
            </div>
        </main>
    </div>
</template>
