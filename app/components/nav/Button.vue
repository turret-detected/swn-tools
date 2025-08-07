<script setup lang="ts">
import { store } from '~/components/nav/sidebar-state';
</script>

<template>
    <button @click="store.sidebarIsOpen = !store.sidebarIsOpen"
        :class="['absolute top-4 left-4 p-2 text-xl border rounded hover:bg-neutral-600', !store.sidebarIsOpen ? 'block' : 'hidden']">
        ☰
    </button>
</template>