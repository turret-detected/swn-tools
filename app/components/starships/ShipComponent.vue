<script setup lang="ts">
import type { NamedItemWithDesc } from './types';

const props = defineProps<{
    component: NamedItemWithDesc
}>()
const emit = defineEmits<{
    (e: "remove", attachment_name: string): void;
}>();
</script>

<template>
    <div class="grid grid-flow-col">
        <p class="w-96">{{ component.desc }}</p>
        <button type="button" class="bg-neutral-900 hover:bg-neutral-700 mx-2 rounded p-0 w-8"
            @click="$emit('remove', component.name)">
            🗑️
        </button>
    </div>
</template>
