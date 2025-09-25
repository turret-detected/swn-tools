<script setup lang="ts">
import { startCase } from 'lodash';
import { GenerateDefenseDescString, GenerateFittingDescString, GenerateWeaponDescString } from './ships';
import type { Nameable, Ship } from './types';
import humanNumber from "human-number";

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
                <td>
                    <p v-for="value in GenerateWeaponDescString(shipData)">{{ value }}</p>
                </td>
            </tr>
            <tr>
                <td>Defenses</td>
                <td>
                    <p v-for="value in GenerateDefenseDescString(shipData)">{{ value }}</p>
                </td>
            </tr>
            <tr>
                <td>Fittings</td>
                <td>
                    <p v-for="value in GenerateFittingDescString(shipData)">{{ value }}</p>
                </td>
            </tr>
            <tr>
                <td>Cost</td>
                <td>{{ humanNumber(shipData.cost) }} base price, {{ humanNumber(shipData.cost * 0.05) }} maintenance
                </td>
            </tr>
        </tbody>
    </table>
</template>