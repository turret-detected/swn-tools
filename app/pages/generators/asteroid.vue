<script setup lang="ts">
import AsteroidView from '~/components/asteroid/AsteroidView.vue';
import { GenerateAsteroid, type Asteroid } from '~/components/asteroid/asteroids';

const asteroid = ref<Asteroid | null>(null)

function generate() {
    asteroid.value = GenerateAsteroid();
}
</script>

<template>
    <div>
        <NavButton class="m-4" />
        <NavSidebar />

        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <NavHeader />

                <h1 class="m-1 mb-2 text-2xl font-medium">Asteroid Generator</h1>

                <button type="button" class="bg-green-900 px-5 py-1.5 rounded-xl hover:bg-green-800 m-1"
                    @click="generate">
                    Generate
                </button>

                <p class="text-center m-1">Material prices are sourced from the <i>Distant Lights</i> supplement.
                </p>
                <p class="text-center m-1">Deposits represent minerals accessible without a dedicated extraction
                    installation.
                </p>
                <p class="text-center m-1">They can be mined at a rate of 1 ton per day per <i>Mobile extractor</i>
                    fitting installed on the ship.</p>
                <p class="text-center m-1">Optional Rule: Require a Int/Program skill check to find the deposits</p>

                <AsteroidView v-model:asteroid="asteroid" />
            </div>
        </main>
    </div>
</template>
