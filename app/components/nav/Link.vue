<script setup lang="ts">
import { store } from '~/components/nav/sidebar-state';

const props = defineProps<{
    path: string,
    title: string,
}>()
</script>

<template>
    <NuxtLink :to=path class="px-3 py-2 rounded hover:bg-neutral-800 underline" @click="store.sidebarIsOpen = false">
        {{ title }}
    </NuxtLink>
</template>