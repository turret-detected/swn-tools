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
    <div class="grid grids-cols-5 grid-flow-col width-200">
        <p class="col-span-4">{{ component.desc }}</p>
        <!-- <p class="hover:decoration-sky-500" @click="$emit('remove', component.name)">🗑️asd</p> -->
        <button type="button" class="bg-neutral-900 hover:bg-neutral-700 mx-2 rounded p-0"
            @click="$emit('remove', component.name)">
            🗑️
        </button>
    </div>
</template>