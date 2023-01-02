<template>
    <svg :class="classList" width="1em" height="1em" viewBox="0 0 24 24">
        <path :fill="color" d="M15.5 5H11l5 7l-5 7h4.5l5-7z"></path>
        <path :fill="color" d="M8.5 5H4l5 7l-5 7h4.5l5-7z"></path>
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    color: string
    classList: string[]
}>()
</script>
