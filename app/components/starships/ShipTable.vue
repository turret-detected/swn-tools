<script setup lang="ts">
import type { Nameable, Ship } from './types';


const props = defineProps<{
    shipData: (Ship & Nameable) | null
}>()
</script>

<template>
    <table v-if="shipData">
        <thead>
            <tr>
                <th>{{ shipData.name ?? "unnamed ship" }}</th>
                <th>{{ shipData.hull }} - {{ shipData.class }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>HP</td>
                <td>{{ shipData.hit_points }}</td>
            </tr>
            <tr>
                <td>AC</td>
                <td>{{ shipData.armor_class }}</td>
            </tr>
            <tr>
                <td>Armor</td>
                <td>{{ shipData.armor }}</td>
            </tr>
            <tr>
                <td>Speed</td>
                <td>{{ shipData.speed }}</td>
            </tr>
            <tr>
                <td>Power</td>
                <td>{{ shipData.power.free }}/{{ shipData.power.max }} free</td>
            </tr>
            <tr>
                <td>Mass</td>
                <td>{{ shipData.mass.free }}/{{ shipData.mass.max }} free</td>
            </tr>
            <tr>
                <td>Crew</td>
                <td>Min {{ shipData.min_crew }}, Max {{ shipData.max_crew }}</td>
            </tr>
            <tr>
                <td>NPC</td>
                <td>TODO</td>
            </tr>
            <tr>
                <td>Weapons</td>
                <td>{{ shipData.weapons }}</td>
            </tr>
            <tr>
                <td>Defenses</td>
                <td>{{ shipData.defenses }}</td>
            </tr>
            <tr>
                <td>Fittings</td>
                <td>{{ shipData.fittings }}</td>
            </tr>
            <tr>
                <td>Cost</td>
                <td>{{ shipData.cost }} base price, {{ shipData.cost * 0.05 }} maintenance</td>
            </tr>
        </tbody>
    </table>
</template>