

<template>
    <div class="mt-6">
        <div class="border-b-2 border-white text-white text-lg">个人技能</div>
        <div v-for="(skill, index) in skills" :key="index" class="mt-2">
            <div class="flex items-start justify-between">
                <div class="text-sm">{{ skill.skillName }}</div>
                <div> <n-rate size="small" readonly v-model:value="skill.skillStar" /></div>
            </div>
            <div v-if="skill.skillDesc" class="text-xs">{{ skill.skillDesc }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SkillType } from "@/store";
defineProps<{
    skills: Array<SkillType>;
}>()
</script>