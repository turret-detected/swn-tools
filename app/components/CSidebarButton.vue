<script setup lang="ts">
import { store } from './state/store';
</script>

<template>
    <button @click="store.sidebarIsOpen = !store.sidebarIsOpen"
        :class="['absolute top-4 left-4 p-2 text-xl border rounded', !store.sidebarIsOpen ? 'block' : 'hidden']">
        ☰
    </button>
</template>