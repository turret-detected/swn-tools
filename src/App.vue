<script setup lang="ts">

import SiteHeader from './components/CSiteHeader.vue';
import { StarSystem } from './components/swn-systems/star_system';

import { ref } from 'vue'

import CStarSystem from './components/CStarSystem.vue';
import { GenerateStarName } from './components/generator/star-names';


const starSystem = ref<StarSystem | null>(null)

function generate() {
  starSystem.value = new StarSystem(GenerateStarName())
  starSystem.value.Generate()
}
</script>

<template>
  <div class="container mx-auto flex flex-col items-center mt-10">
    <SiteHeader />
    <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800" @click="generate">
      Generate Star System
    </button>
    <CStarSystem :starSystem="starSystem" />
  </div>
</template>
