<script setup lang="ts">

import { ref } from 'vue'
import { StarSystem } from '~/components/stars/star-system';
import { GenerateStarName } from '~/components/generator/star-names';
import { StarsSystem } from '#components';

const starSystem = ref<StarSystem | null>(null)

function generate() {
    starSystem.value = new StarSystem(GenerateStarName())
    starSystem.value.Generate()
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
                <StarsSystem :starSystem="starSystem" />
            </div>
        </main>
    </div>
</template>
