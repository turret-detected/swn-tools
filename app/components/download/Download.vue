<script setup lang="ts">
const props = defineProps<{
    content: string
    extension: string
    filename: string
    displayText: string
}>()

const fileName = props.filename.replaceAll(" ", "-") + "." + props.extension

function downloadFile() {
    const blob = new Blob([props.content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    URL.revokeObjectURL(url)
}
</script>

<template>
    <button @click="downloadFile"> {{ displayText }} </button>
</template>
