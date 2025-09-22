<script setup lang="ts">
import { type StarType } from '~/components/generator/types';

const props = defineProps<{
    starType: StarType | undefined
}>()
</script>

<template>
    <span v-if="starType" class="circle" :style="{ '--color': starType.color, '--circle-px': '40px' }"></span>
</template>

<style lang="css" scoped>
.circle {
    background-color: var(--color);
    height: var(--circle-px);
    width: var(--circle-px);
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 12px var(--color, rgba(0, 0, 0, 0.3));
}
</style>