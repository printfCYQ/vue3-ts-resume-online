
<template>
    <div class="mt-6">
        <div class="border-b-2 border-white text-white text-lg">更多信息</div>
        <div v-for="(award, index) in awards" :key="index" class="mt-4">
            <div class="flex items-center justify-between text-xs">
                <div>{{ award.name }}</div>
                <div>{{ award.time }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AwardType } from "@/store";

defineProps<{
    awards: Array<AwardType>;
}>()
</script>