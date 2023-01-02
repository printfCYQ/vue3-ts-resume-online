<template>
    <div class="mt-6">
        <div class="border-b-3  text-lg" :style="{ borderColor: appStore.primaryColor, color: appStore.primaryColor }">
            工作经历</div>
        <div v-for="(work, index) in works" :key="index" class="mt-4">
            <div class="flex items-center justify-between text-xs">
                <div class="flex items-center">
                    <Tag :color="appStore.primaryColor" :classList="['text-lg']" />
                    <div class="text-lg ml-1" :style="{ color: appStore.primaryColor }">{{ work.company }}</div>
                    <div class="ml-3 text-gray-400">{{ work.department }}</div>
                </div>
                <div>{{ work.startTime }} / {{ work.endTime }}</div>
            </div>
            <div class="mt-2 whitespace-pre-wrap">{{ work.description }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore, WorkType } from '@/store';
const appStore = useAppStore()

defineProps<{
    works: Array<WorkType>;
}>()
</script>