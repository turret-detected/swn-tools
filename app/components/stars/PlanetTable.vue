<script setup lang="ts">
import type { Planet } from './planet';
import _, { startCase } from 'lodash';

defineProps<{
    planet: Planet
}>()
</script>

<template>
    <table class="table-auto w-full border border-gray-400">
        <tbody>
            <tr v-for="(value, key) in planet" :key="key">
                <th class="w-40 py-0.5">{{ startCase(key) }}</th>
                <!-- Typescript says the below is invalid but it's not -->
                <td class="w-80 py-0.5" v-if="!(value instanceof Array)">{{ value }}</td>
                <td class="w-80 py-0.5" v-if="(value instanceof Array)">{{ value[0] }} & {{ value[1] }}</td>
            </tr>
        </tbody>
    </table>
</template>
