<script setup lang="ts">
import { ref } from 'vue'
import { GeneratePlanet, Planet } from './swn-systems/system'

const planet = ref<Planet | null>(null)

function generate() {
  planet.value = GeneratePlanet()
}

</script>

<template>
  <div class="flex flex-col items-center mt-10 space-y-6">
    <div class="w-full max-w-2xl overflow-x-auto min-h-[200px]">
      <table v-if="planet" class="table-auto w-full border border-gray-400">
        <tbody>
          <tr>
            <th class="w-40 py-0.5">Name</th>
            <td class="w-80">{{ planet.Name }}</td>
          </tr>
          <tr>
            <th class="w-40 py-0.5">Temperature</th>
            <td>{{ planet.Temperate }}</td>
          </tr>
          <tr>
            <th class="w-40 py-0.5">Atmosphere</th>
            <td>{{ planet.Atmosphere }}</td>
          </tr>
          <tr>
            <th class="w-40 py-0.5">Biosphere</th>
            <td>{{ planet.Biosphere }}</td>
          </tr>
          <tr>
            <th class="w-40 py-0.5">Population</th>
            <td>{{ planet.Population }}</td>
          </tr>
          <tr>
            <th class="w-40 py-0.5">Tech Level</th>
            <td>{{ planet.TechLevel }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800" @click="generate">
      Generate Planet
    </button>
  </div>
</template>
