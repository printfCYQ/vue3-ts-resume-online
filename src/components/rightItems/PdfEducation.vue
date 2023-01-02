
<template>
    <div class="mt-6">
        <div class="border-b-2 border-white text-white text-lg">教育背景</div>
        <div v-for="(edu, index) in edus" :key="index" class="mt-2">
            <div class="flex items-center justify-between text-xs">
                <div>{{ edu.school }}</div>
                <div>{{ edu.startTime }}/{{ edu.endTime }}</div>
            </div>
            <div class="flex items-center justify-between text-xs mt-1">
                <div>{{ edu.major }}</div>
                <div>{{ edu.degree }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EduType } from "@/store";

defineProps<{
    edus: Array<EduType>;
}>()
</script>