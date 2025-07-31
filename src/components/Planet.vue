<script setup lang="ts">
import { ref } from 'vue'
import { GeneratePlanet, Planet } from './swn-systems/system'

const planet = ref<Planet | null>(null)

function generate() {
  planet.value = GeneratePlanet()
}
</script>

<template>
  <div>
    <table v-if="planet">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{ planet.Name }}</td>
        </tr>
        <tr>
          <th>Temperature</th>
          <td>{{ planet.Temperate }}</td>
        </tr>
        <tr>
          <th>Atmosphere</th>
          <td>{{ planet.Atmosphere }}</td>
        </tr>
        <tr>
          <th>Biosphere</th>
          <td>{{ planet.Biosphere }}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{{ planet.Population }}</td>
        </tr>
        <tr>
          <th>Tech Level</th>
          <td>{{ planet.TechLevel }}</td>
        </tr>
      </tbody>
    </table>

    <!-- TODO THERE MUST BE A BETTER WAY TO DO THIS -->
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>
    <br v-if="!planet"></br>

    <br v-if="planet">
    <button @click="generate">
      Generate Planet
    </button>
  </div>
</template>
