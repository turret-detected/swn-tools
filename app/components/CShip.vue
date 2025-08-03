<script setup lang="ts">
import { ref } from 'vue'
import { HullMap } from './swn-ships/hulls'
import { WeaponMap } from './swn-ships/weapons'
import { Ship } from './swn-ships/types'

const ship = ref(new Ship(HullMap['strike_fighter'], [WeaponMap['multifocal_laser']], [], []))
</script>

<template>
  <div>
    <h2>Ship</h2>
    <p>{{ ship.json() }}</p>

    <!-- <label>
      Name:
      <input v-model="person.name" />
    </label>

    <label>
      Age:
      <input type="number" v-model.number="person.age" />
    </label> -->
  </div>
</template>
