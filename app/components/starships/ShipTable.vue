<script setup lang="ts">
import { GenerateDefenseDescString, GenerateFittingDescString, GenerateWeaponDescString } from './ships';
import type { Nameable, Ship } from './types';
import { AttachmentType } from './types';
import humanNumber from "human-number";
import ShipComponent from './ShipComponent.vue';

const props = defineProps<{
    shipData: (Ship & Nameable) | null
}>()
const emit = defineEmits<{
    (e: "remove", attachment_name: string, attachment_type: AttachmentType): void;
    (e: "setName", name: string): void;
}>();
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
                    <div v-for="value in GenerateWeaponDescString(shipData)">
                        <ShipComponent
                            @remove="(attachment_name) => emit('remove', attachment_name, AttachmentType.Weapon)"
                            :component="value"></ShipComponent>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Defenses</td>
                <td>
                    <div v-for="value in GenerateDefenseDescString(shipData)">
                        <ShipComponent
                            @remove="(attachment_name) => emit('remove', attachment_name, AttachmentType.Defense)"
                            :component="value"></ShipComponent>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Fittings</td>
                <td>
                    <div v-for="value in GenerateFittingDescString(shipData)">
                        <ShipComponent
                            @remove="(attachment_name) => emit('remove', attachment_name, AttachmentType.Fitting)"
                            :component="value"></ShipComponent>
                    </div>
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
