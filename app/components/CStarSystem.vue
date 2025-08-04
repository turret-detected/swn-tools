<script setup lang="ts">
import { StarSystem } from './swn-systems/star_system'

const props = defineProps<{
  starSystem: StarSystem | null
}>()
</script>

<template>
  <div class="flex flex-col items-center mt-10 space-y-6 w-full max-w-2xl overflow-x-auto">
    <div v-if="starSystem" class="text-2xl text-center font-bold py-0.5">
      <h2>{{ starSystem.Name }} - {{ starSystem.StarType }} Star </h2>
      <p class="text-sm font-normal pb-0">*</p>
    </div>
    <div v-if="starSystem">
      <div v-for="planet in starSystem.Planets">
        <c-planet :planet="planet"></c-planet>
      </div>
    </div>
  </div>
</template>
