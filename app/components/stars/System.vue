<script setup lang="ts">
import { GeneratePlanet, GenerateNonViablePlanet } from './planet';
import { type StarSystem } from './star';

const props = defineProps<{
  starSystem: StarSystem | null
}>()
</script>

<template>
  <div class="flex flex-col items-center mt-6 w-full max-w-3xl overflow-x-auto">
    <div v-if="starSystem" class="text-2xl text-center font-bold">
      <h2>{{ starSystem.name }} - {{ starSystem.type.name }} Star </h2>
      <StarsDisplayCircle :star-type="starSystem.type" class="m-1" />
    </div>
    <div v-if="starSystem">
      <p class="text-lg text-center font-semibold m-1">Planets</p>
      <div v-for="(planet, index) in starSystem.planets">
        <div class="grid grid-cols-9 gap-1">
          <div />
          <StarsPlanetTable class="col-span-7" :planet="planet" />
          <div>
            <!--TODO migrate to a component-->
            <button class="text-2xl pt-2" v-if="'type' in planet"
              @click="starSystem.planets[index] = GenerateNonViablePlanet()">⚄</button>
            <button class="text-2xl pt-2" v-if="!('type' in planet)"
              @click="starSystem.planets[index] = GeneratePlanet()">⚄</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
