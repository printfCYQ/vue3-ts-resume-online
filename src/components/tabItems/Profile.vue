<template>
    <div class="p-10">
        <n-form label-placement="left" label-align="left" :label-width="90" :show-require-mark="false">
            <n-form-item label="姓名：">
                <n-input v-model:value="appStore.profile.userName" clearable />
            </n-form-item>
            <n-form-item label="简介：">
                <n-input v-model:value="appStore.profile.description" clearable />
            </n-form-item>
            <n-form-item label="手机：">
                <n-input v-model:value="appStore.profile.phone" clearable />
            </n-form-item>
            <n-form-item label="emial：">
                <n-input v-model:value="appStore.profile.email" clearable />
            </n-form-item>
            <n-form-item label="github：">
                <n-input v-model:value="appStore.profile.github" clearable />
            </n-form-item>
            <n-form-item label="主页：">
                <n-input v-model:value="appStore.profile.homePage" clearable />
            </n-form-item>
            <n-form-item label="工作经验：">
                <n-input-number min="0" v-model:value="appStore.profile.workYear" clearable />
            </n-form-item>
            <n-form-item label="工作地点：">
                <n-input v-model:value="appStore.profile.workPlace" clearable />
            </n-form-item>
            <n-form-item label="职位：">
                <n-input v-model:value="appStore.profile.position" clearable />
            </n-form-item>
        </n-form>
    </div>
</template>
  
<script setup lang="ts">
import { useAppStore } from '@/store';
const appStore = useAppStore()
</script>