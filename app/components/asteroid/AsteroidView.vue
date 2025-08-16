<script setup lang="ts">
import { MineralRarityToPricePerTon } from '../generator/custom-tables';
import type { Asteroid } from './asteroids';

const props = defineProps<{
  asteroid: Asteroid | null
}>()

function priceFromRarity(rarity: string): number {
  return MineralRarityToPricePerTon[rarity]
}

</script>

<template>
  <div class="flex flex-col items-center m-4 w-full max-w-3xl overflow-x-auto">
    <div v-if="asteroid" class="text-2xl text-center font-bold">
    </div>
    <div v-if="asteroid">
      <h2 class="text-lg text-center font-bold m-2">{{ asteroid.name }}</h2>
      <table class="min-w-[500px] table-fixed border border-gray-400">
        <thead>
          <tr class="w-80 p-1">
            <th>Scan Results</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="deposit in asteroid.deposits">
            <td class="p-1 text-center">{{ deposit.volume }} tons of {{ deposit.rarity }} minerals worth {{
              priceFromRarity(deposit.rarity) }} credits/ton</td>
          </tr>
          <tr v-if="asteroid.deposits.length === 0 && !(asteroid.special)">
            <td class="text-center">Nothing of note</td>
          </tr>
          <tr v-if="asteroid.special">
            <td class="text-center"> {{ asteroid.special }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
  </div>
</template>
