<script setup lang="ts">
import SiteHeader from '~/components/CSiteHeader.vue';
import CStarSystem from '~/components/CStarSystem.vue';
import CSidebar from '~/components/CSidebar.vue';

import { ref } from 'vue'
import { StarSystem } from '~/components/swn-systems/star_system';
import { GenerateStarName } from '~/components/generator/star-names';

const starSystem = ref<StarSystem | null>(null)

function generate() {
    starSystem.value = new StarSystem(GenerateStarName())
    starSystem.value.Generate()
}
</script>

<template>
    <div>
        <CSidebarButton class="m-4" />
        <CSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <SiteHeader />
                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800" @click="generate">
                    Generate Star System
                </button>
                <CStarSystem :starSystem="starSystem" />
            </div>
        </main>
    </div>


</template>
