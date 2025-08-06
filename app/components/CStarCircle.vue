<script setup lang="ts">
import { StarType } from './generator/types';

const props = defineProps<{
    starType: StarType | undefined
}>()
</script>

<template>
    <span v-if="starType" class="circle" :style="{ backgroundColor: starType.Color }"></span>
</template>

<style lang="css" scoped>
.circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
}
</style>