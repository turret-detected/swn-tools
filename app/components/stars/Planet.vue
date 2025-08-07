<script setup lang="ts">
import { ViablePlanet, NonViablePlanet, type Planet } from './star-system'

const props = defineProps<{
  planet: Planet
}>()
</script>

<template>
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
      <tr v-if="(planet instanceof ViablePlanet)">
        <th class="w-40 py-0.5">World Tags</th>
        <td>{{ planet.Tags[0] }} & {{ planet.Tags[1] }}</td>
      </tr>
    </tbody>
  </table>
</template>
