<!-- <script setup lang="ts">

</script> -->

<script setup lang="ts">
import { NonViablePlanet, StarSystem, ViablePlanet } from './swn-systems/star_system'

const props = defineProps<{
  starSystem: StarSystem | null
}>()
</script>

<template>
  <div class="flex flex-col items-center mt-10 space-y-6 w-full max-w-2xl overflow-x-auto">
    <h2 class="text-2xl text-center font-bold py-0.5" v-if="starSystem">{{ starSystem.Name }} - {{ starSystem.StarType
      }} Star
    </h2>
    <div v-if="starSystem">
      <div v-for="planet in starSystem.Planets">
        <table class="table-auto w-full border border-gray-400">
          <tbody>
            <tr>
              <th class="w-40 py-0.5">Name</th>
              <td class="w-80">{{ planet.Name }}</td>
            </tr>
            <tr v-if="(planet instanceof NonViablePlanet)">
              <th class="w-40 py-0.5">Type</th>
              <td>{{ planet.Type }}</td>
            </tr>
            <tr v-if="(planet instanceof ViablePlanet)">
              <th class="w-40 py-0.5">Temperature</th>
              <td>{{ planet.Temperate }}</td>
            </tr>
            <tr v-if="(planet instanceof ViablePlanet)">
              <th class="w-40 py-0.5">Atmosphere</th>
              <td>{{ planet.Atmosphere }}</td>
            </tr>
            <tr v-if="(planet instanceof ViablePlanet)">
              <th class="w-40 py-0.5">Biosphere</th>
              <td>{{ planet.Biosphere }}</td>
            </tr>
            <tr v-if="(planet instanceof ViablePlanet)">
              <th class="w-40 py-0.5">Population</th>
              <td>{{ planet.Population }}</td>
            </tr>
            <tr v-if="(planet instanceof ViablePlanet)">
              <th class="w-40 py-0.5">Tech Level</th>
              <td>{{ planet.TechLevel }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
