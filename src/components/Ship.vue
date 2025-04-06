<script setup lang="ts">
import { ref } from 'vue'
import { hullMap } from './swn/hulls.ts'
import { Ship } from './swn/types.ts'

const ship = ref(new Ship(hullMap['strike_fighter'], null, null, null))
</script>

<template>
  <div>
    <h2>Ship</h2>
    <p>{{ ship }}</p>

    <label>
      Name:
      <input v-model="person.name" />
    </label>

    <label>
      Age:
      <input type="number" v-model.number="person.age" />
    </label>
  </div>
</template>

