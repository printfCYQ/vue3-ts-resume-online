<template>
    <div class="mt-6">
        <div class="border-b-3 text-lg" :style="{ borderColor: appStore.primaryColor, color: appStore.primaryColor }">
            项目经历
        </div>
        <div v-for="(project, index) in projects" :key="index" class="mt-4">
            <div class="flex items-center justify-between text-xs">
                <div class="flex items-center">
                    <Arrow :color="appStore.primaryColor" :classList="['text-lg']" />
                    <div class="text-lg ml-1" :style="{ color: appStore.primaryColor }">{{ project.name }}</div>
                    <div class="ml-3 text-gray-400">{{ project.startTime }} / {{ project.endTime }}</div>
                </div>
                <div class="py-1 px-2 rounded-sm"
                    :style="{ color: appStore.primaryColor, backgroundColor: appStore.secondaryColor }">
                    {{ project.role }}
                </div>
            </div>
            <div class="mt-2 whitespace-pre-wrap">{{ project.description }}</div>
            <div class="mt-2 whitespace-pre-wrap">{{ project.content }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProjectType, useAppStore } from '@/store';
const appStore = useAppStore()

defineProps<{
    projects: Array<ProjectType>;
}>()
</script>