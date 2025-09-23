<script setup lang="ts">
import { startCase } from 'lodash';
import ShipTable from '~/components/starships/ShipTable.vue';
import { ShipDefenses, ShipFittings, ShipHulls, ShipWeapons } from '~/components/generator/official-ships';
import { AddAttachment, NewShipFromHullType } from '~/components/starships/ships';
import { AttachmentType, type Ship } from '~/components/starships/types';

const result = ref<Ship | null>(null)

const selectedHull = ref<any>(null)

function selectHull() {
    result.value = NewShipFromHullType(selectedHull.value)
    console.log(result.value)
}

const selectedWeapon = ref<any>(null)

function addWeapon() {
    if (result.value == null) {
        return
    }
    result.value = AddAttachment(
        result.value,
        selectedWeapon.value,
        ShipWeapons[selectedWeapon.value]!,
        AttachmentType.Weapon,
    )
    console.log(result.value)
}

const selectedDefense = ref<any>(null)

function addDefense() {
    if (result.value == null) {
        return
    }
    result.value = AddAttachment(
        result.value,
        selectedDefense.value,
        ShipDefenses[selectedDefense.value]!,
        AttachmentType.Defense,
    )
    console.log(result.value)
}

const selectedFitting = ref<any>(null)

function addFitting() {
    if (result.value == null) {
        return
    }
    result.value = AddAttachment(
        result.value,
        selectedFitting.value,
        ShipFittings[selectedFitting.value]!,
        AttachmentType.Fitting,
    )
    console.log(result.value)
}

// TODO:
// - reduce copy pasta into components/functions
// - try and catch exceptions for adding attachments
// - show toast on failure to add
// - removal functionality
// - ship name generator/input
// - import/export ship
// - change how attachments are stored (probably only need name and vital stats)
// - human readable numbers
// - more detailed selection, either on hover show more stats or show at least cost and some others
// - support state/undo/redo, try to reuse existing star gen system and make it generic
// - add button to fill remaining free mass with cargo space, on hover preview tonnage
// - add cargo space calculator
</script>

<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />

                <h1 class="m-1 mb-2 text-2xl font-medium">Ship Builder (WIP)</h1>

                <select v-model="selectedHull" class="bg-neutral-700 m-2 p-1" id="generator">
                    <option v-for="(item, index) in ShipHulls" :value="index" :key="index">
                        {{ startCase(index.replaceAll("_", " ")) }}
                    </option>
                </select>

                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="selectHull">
                    Select Hull
                </button>

                <select v-model="selectedWeapon" class="bg-neutral-700 m-2 p-1" id="generator">
                    <option v-for="(item, index) in ShipWeapons" :value="index" :key="index">
                        {{ startCase(index.replaceAll("_", " ")) }}
                    </option>
                </select>

                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="addWeapon">
                    Add Weapon
                </button>

                <select v-model="selectedDefense" class="bg-neutral-700 m-2 p-1" id="generator">
                    <option v-for="(item, index) in ShipDefenses" :value="index" :key="index">
                        {{ startCase(index.replaceAll("_", " ")) }}
                    </option>
                </select>

                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="addDefense">
                    Add Defense
                </button>

                <select v-model="selectedFitting" class="bg-neutral-700 m-2 p-1" id="generator">
                    <option v-for="(item, index) in ShipFittings" :value="index" :key="index">
                        {{ startCase(index.replaceAll("_", " ")) }} - {{ item.cost }} cr
                    </option>
                </select>

                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="addFitting">
                    Add Fitting
                </button>

                <ShipTable v-model:shipData="result"></ShipTable>
            </div>
        </main>
    </div>
</template>
