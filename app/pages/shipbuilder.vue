<script setup lang="ts">
import { startCase } from 'lodash';
import ShipTable from '~/components/starships/ShipTable.vue';
import ShipBuilderSelector from '~/components/starships/ShipBuilderSelector.vue';
import { ShipDefenses, ShipFittings, ShipHulls, ShipWeapons } from '~/components/generator/official-ships';
import { AddAttachment, NewShipFromHullType } from '~/components/starships/ships';
import { AttachmentType, type Ship } from '~/components/starships/types';

const currentShip = ref<Ship | null>(null)

function selectHull(hull: string) {
    currentShip.value = NewShipFromHullType(hull)
}

function addWeapon(weapon_name: string) {
    if (currentShip.value == null) {
        return
    }
    currentShip.value = AddAttachment(
        currentShip.value,
        weapon_name,
        ShipWeapons[weapon_name]!,
        AttachmentType.Weapon,
    )
}

function addDefense(defense_name: string) {
    if (currentShip.value == null) {
        return
    }
    currentShip.value = AddAttachment(
        currentShip.value,
        defense_name,
        ShipDefenses[defense_name]!,
        AttachmentType.Defense,
    )
}

function addFitting(fitting_name: string) {
    if (currentShip.value == null) {
        return
    }
    currentShip.value = AddAttachment(
        currentShip.value,
        fitting_name,
        ShipFittings[fitting_name]!,
        AttachmentType.Fitting,
    )
}

// TODO:
// - try and catch exceptions for adding attachments
// - show toast on failure to add
// - removal functionality
// - ship name generator/input
// - import/export ship
// - change how attachments are stored (probably only need name and vital stats)
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

                <ShipBuilderSelector @select="(value) => selectHull(value)" :selectable_list="ShipHulls"
                    button_text="Select Hull" v-bind:ship_class="currentShip?.class">
                </ShipBuilderSelector>

                <ShipBuilderSelector @select="(value) => addWeapon(value)" :selectable_list="ShipWeapons"
                    button_text="Add Weapon" v-bind:ship_class="currentShip?.class">
                </ShipBuilderSelector>

                <ShipBuilderSelector @select="(value) => addDefense(value)" :selectable_list="ShipDefenses"
                    button_text="Add Defense" v-bind:ship_class="currentShip?.class">
                </ShipBuilderSelector>

                <ShipBuilderSelector @select="(value) => addFitting(value)" :selectable_list="ShipFittings"
                    button_text="Add Fitting" v-bind:ship_class="currentShip?.class">
                </ShipBuilderSelector>

                <ShipTable v-model:shipData="currentShip"></ShipTable>
            </div>
        </main>
    </div>
</template>
