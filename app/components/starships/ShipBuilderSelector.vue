<script setup lang="ts">
import { startCase } from 'lodash';
import { ShipClass } from '../generator/types';
import { scaleCostToShipSize, scaleMassOrPowerToShipSize } from './utils';

const props = defineProps<{
    selectable_list: Record<string, any>
    button_text: string
    ship_class: ShipClass | undefined
}>()

const emit = defineEmits<{
    (e: "select", value: string): void;
}>();

function renderTitle(obj: any, ship_class: ShipClass | undefined): string {
    if (ship_class == undefined) {
        // obj must be a ship
        // so we set to fighter even thought _scales 
        // variables will be missing and scale functions will return early
        ship_class = ShipClass.Fighter
    }

    let titleStr = ""

    if (obj.hardpoints && !(typeof obj.hardpoints === "object")) {
        titleStr += obj.hardpoints
        titleStr += " hardpoints | "
    }

    if (obj.power && !(typeof obj.hardpoints === "object")) {
        titleStr += scaleMassOrPowerToShipSize(obj.power, ship_class, obj.power_scales)
        titleStr += " power | "
    }

    if (obj.mass && !(typeof obj.hardpoints === "object")) {
        titleStr += scaleMassOrPowerToShipSize(obj.mass, ship_class, obj.mass_scales)
        titleStr += " mass | "
    }

    titleStr += scaleCostToShipSize(obj.cost, ship_class, obj.cost_scales)
    titleStr += " cr"

    return titleStr
}

const selected = ref<string>("");
</script>

<template>
    <select v-model="selected" class="bg-neutral-700 m-2 p-1 w-48">
        <option v-for="(item, index) in selectable_list" :value="index" :key="index"
            :title="renderTitle(item, ship_class)">
            {{ startCase(index.replaceAll("_", " ")) }}
        </option>
    </select>

    <button type="button" class="bg-green-900 px-3 py-1 rounded-xl hover:bg-green-800 m-1"
        @click="$emit('select', selected.valueOf())">
        {{ button_text }}
    </button>
</template>
