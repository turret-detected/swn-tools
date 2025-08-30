<script setup lang="ts">
import { CargoCommonOres, CargoUncommonOres, DemocracyNames, EmpireNames, PlanetNamesPostfixLatin, PretechPrefix, PretechSuffix } from '~/components/generator/custom-tables';
import { RollOnList } from '~/components/generator/random';

const result = ref<string | null>(null)

function generate() {
    const roll: string = indexToGenerate[selected.value]()
    result.value = roll
}

const generatorList = [
    "Flavor - Metal (WIP)",
    "Flavor - Pretech Salvage",
    "Faction - Democracy (WIP)",
    "Faction - Imperial (WIP)",
]

const indexToGenerate = {
    "0": () => { return RollOnList(CargoCommonOres.concat(CargoUncommonOres)) },
    "1": () => { return RollOnList(PretechPrefix) + " " + RollOnList(PretechSuffix) },
    "2": () => { return RollOnList(PlanetNamesPostfixLatin) + "n " + RollOnList(DemocracyNames) },
    "3": () => { return RollOnList(PlanetNamesPostfixLatin) + "n " + RollOnList(EmpireNames) },
}

const selected = ref("")


</script>

<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />

                <h1 class="m-1 mb-2 text-2xl font-medium">Other Generators</h1>

                <select v-model="selected" class="bg-neutral-700 m-2 p-1" id="generator">
                    <option v-for="(item, index) in generatorList" :value="index" :key="index">
                        {{ item }}
                    </option>
                </select>
                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="generate">
                    Generate
                </button>

                <p v-if="result" class="p-1 m-3 outline"> {{ result }}</p>
            </div>
        </main>
    </div>
</template>
