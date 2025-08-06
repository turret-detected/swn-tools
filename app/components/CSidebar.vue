<script setup lang="ts">
import { store } from './state/store';
</script>

<template>
    <nav :class="[
        'fixed top-0 left-0 h-full w-64 p-4 pt-10 border-r border-neutral-300',
        store.sidebarIsOpen ? 'block' : 'hidden'
    ]">
        <button @click="store.sidebarIsOpen = !store.sidebarIsOpen"
            class="absolute top-4 left-4 p-2 text-xl border rounded m-4">
            ☰
        </button>
        <br />
        <br />
        <ul class="space-y-2">
            <li>
                <NuxtLink to="/" class="block px-3 py-2 rounded hover:bg-neutral-800 font-semibold underline"
                    @click="store.sidebarIsOpen = false">
                    Home
                </NuxtLink>
            </li>
            <li>
                <h1 class="text-lg pl-3 font-bold ">Generators</h1>
            </li>
            <li>
                <NuxtLink to="/generators/system" class="block px-3 py-2 rounded hover:bg-neutral-800 underline"
                    @click="store.sidebarIsOpen = false">
                    Star System
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
