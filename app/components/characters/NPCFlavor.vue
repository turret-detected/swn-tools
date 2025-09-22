<script setup lang="ts">
import type { NPCAttr } from './npc';

const props = defineProps<{
    npc: NPCAttr | null
}>()
</script>

<template>
    <div v-if="npc">
        <p>
            {{ npc.Name }} is a {{ npc.Gender.toLowerCase() }} {{ npc.Career.toLowerCase() }}.
        </p>
        <p>
            They have {{ npc.SkinTone.toLowerCase() }} skin and {{ npc.HairStyle.toLowerCase() }}
            {{ npc.HairColor.toLowerCase() }} hair
            with {{ npc.EyeColor.toLowerCase() }} eyes.
        </p>
        <p>
            They are {{ npc.Size.toLowerCase() }} wearing
            {{ npc.OutfitColor.toLowerCase() }} {{ npc.OutfitStyle.toLowerCase() }}.
        </p>
    </div>
</template>