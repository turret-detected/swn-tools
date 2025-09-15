<script setup lang="ts">
import type { NPCAttr } from './npc';

const props = defineProps<{
    npc: NPCAttr | null
}>()
</script>

<template>
    <div v-if="npc">
        <p>
            Alex Smith is a {{ npc.Gender }} {{ npc.Career }}.
        </p>
        <p>
            They have {{ npc.SkinTone }} skin and {{ npc.HairColor }} hair
            with {{ npc.EyeColor }} eyes.
        </p>
        <p>
            They are {{ npc.Size }} wearing
            {{ npc.OutfitColor }} {{ npc.OutfitStyle }}
        </p>
    </div>
</template>