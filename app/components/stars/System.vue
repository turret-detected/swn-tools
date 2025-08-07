<script setup lang="ts">
import { StarSystem } from './star-system'

const props = defineProps<{
  starSystem: StarSystem | null
}>()
</script>

<template>
  <div class="flex flex-col items-center mt-10 space-y-6 w-full max-w-2xl overflow-x-auto">
    <div v-if="starSystem" class="text-2xl text-center font-bold py-0.5">
      <h2>{{ starSystem.Name }} - {{ starSystem.StarType.Name }} Star </h2>
      <StarsDisplayCircle :star-type="starSystem.StarType" class="m-1" />
    </div>
    <div v-if="starSystem">
      <div v-for="planet in starSystem.Planets">
        <StarsPlanet :planet="planet" />
      </div>
    </div>
  </div>
</template>
