<script setup lang="ts">
import ShipTable from '~/components/starships/ShipTable.vue';
import ShipBuilderSelector from '~/components/starships/ShipBuilderSelector.vue';
import { ShipDefenses, ShipFittings, ShipHulls, ShipWeapons } from '~/components/generator/official-ships';
import { AddAttachment, NewShipFromHullType, RemoveAttachment } from '~/components/starships/ships';
import { AttachmentType, type Nameable, type Ship } from '~/components/starships/types';
import { ExampleShips } from '~/components/starships/defaults';

const currentShip = ref<(Ship & Nameable) | null>(null)
const toast = useToast()

function selectHull(hull: string) {
    currentShip.value = NewShipFromHullType(hull)
}

function addWeapon(weapon_name: string) {
    if (currentShip.value == null) {
        return
    }
    try {
        currentShip.value = AddAttachment(
            currentShip.value,
            weapon_name,
            ShipWeapons[weapon_name]!,
            AttachmentType.Weapon,
        )
    } catch (error) {
        toast.add(
            {
                "severity": "error",
                "summary": "Failed",
                "life": 5000,
                "detail": error,
            }
        )
    }
}

function addDefense(defense_name: string) {
    if (currentShip.value == null) {
        return
    }
    try {
        currentShip.value = AddAttachment(
            currentShip.value,
            defense_name,
            ShipDefenses[defense_name]!,
            AttachmentType.Defense,
        )
    } catch (error) {
        toast.add(
            {
                "severity": "error",
                "summary": "Failed",
                "life": 5000,
                "detail": error,
            }
        )
    }

}

function addFitting(fitting_name: string) {
    if (currentShip.value == null) {
        return
    }
    try {
        currentShip.value = AddAttachment(
            currentShip.value,
            fitting_name,
            ShipFittings[fitting_name]!,
            AttachmentType.Fitting,
        )
    } catch (error) {
        toast.add(
            {
                "severity": "error",
                "summary": "Failed",
                "life": 5000,
                "detail": error,
            }
        )
    }
}

function removeAttachment(attachment_name: string, attachment_type: AttachmentType) {
    if (currentShip.value == null) {
        return
    }
    currentShip.value = RemoveAttachment(
        currentShip.value,
        attachment_name,
        attachment_type,
    )
}

function setName(name: string) {
    if (currentShip.value == null) {
        return
    }
    currentShip.value.name = name
}

function setShip(ship_name: string) {
    currentShip.value = ExampleShips[ship_name]!
}


// TODO:
// - ship name generator/input
// - import/export/print ship
// - support state/undo/redo, try to reuse existing star gen system and make it generic
// - add button to fill remaining free mass with cargo space, on hover preview tonnage
// - handle ammo (need button next to ammo weapons?)
</script>

<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <Toast />
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />

                <h1 class="m-1 text-2xl font-medium">Ship Builder (WIP)</h1>
                <p class="m-1 font-light">Please
                    report bugs on <a class="underline" target="_blank"
                        href="https://github.com/turret-detected/swn-tools/issues">Github</a></p>
                <p class="m-1 font-light">To get started, select a preset or a hull on the left</p>
                <div class="grid grid-cols-5 mx-32">
                    <div class="col-span-2">
                        <ShipBuilderSelector @select="(value) => setShip(value)" :selectable_list="ExampleShips"
                            button_text="Select Preset" v-bind:ship_class="currentShip?.class">
                        </ShipBuilderSelector>

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
                    </div>
                    <div class="col-span-3">
                        <ShipTable
                            @remove="(attachment_name, attachment_type) => removeAttachment(attachment_name, attachment_type)"
                            @set-name="(name) => setName(name)" v-model:shipData="currentShip">
                        </ShipTable>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
