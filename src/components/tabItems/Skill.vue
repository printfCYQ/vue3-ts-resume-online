<template>
    <div class="p-10 h-full overflow-auto">
        <n-card :title="'技能' + (index + 1)" class="mb-2" v-for="(item, index) in appStore.skills" :key="index" closable
            @close="handleClose(index)">
            <n-form label-placement="left" label-align="left" :label-width="60" :show-require-mark="false">
                <n-form-item label="名称：">
                    <n-input v-model:value="item.skillName" />
                </n-form-item>
                <n-form-item label="熟练度：">
                    <n-input-number min="0" max="5" v-model:value="item.skillStar" clearable />
                </n-form-item>
                <n-form-item label="描述：">
                    <n-input v-model:value="item.skillDesc" />
                </n-form-item>
            </n-form>
        </n-card>
        <div class="mt-2 w-full">
            <n-button class="mt-1" style="width:100% !important" type="primary" @click="addItem">
                <template #icon>
                    <div class="i-ic:baseline-add text-4xl" />
                </template>
                添加
            </n-button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useAppStore } from '@/store';
const appStore = useAppStore()

const handleClose = (index: number) => {
    appStore.skills.splice(index, 1)
}

const addItem = () => {
    appStore.skills.push({
        skillName: '',
        skillDesc: '',
        skillStar: 0
    },)
}
</script>