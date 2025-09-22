<script setup lang="ts">
import NPCFlavor from '~/components/characters/NPCFlavor.vue';
import { GenerateNPC, type NPCAttr } from '~/components/characters/npc';

const randomNPC = ref<NPCAttr | null>(null)

function generate() {
    randomNPC.value = GenerateNPC();
}
</script>


<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />
                <h1 class="m-1 mb-2 text-2xl font-medium">NPC Generator</h1>
                <div class="grid grids-cols-3 grid-flow-col">
                    <button type="button" class="px-2 py-1.5 rounded-xl bg-green-900 hover:bg-green-800 m-1"
                        @click="generate">
                        Generate (WIP)
                    </button>
                </div>
                <NPCFlavor v-model:npc="randomNPC" />
            </div>
        </main>
    </div>
</template>