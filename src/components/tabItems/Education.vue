<template>
    <div class="p-10 h-full overflow-auto">
        <n-card :title="'教育经历' + (index + 1)" class="mb-2" v-for="(item, index) in appStore.edus" :key="index" closable
            @close="handleClose(index)">
            <n-form label-placement="left" label-align="left" :label-width="60" :show-require-mark="false">
                <n-form-item label="学校：">
                    <n-input v-model:value="item.school" />
                </n-form-item>
                <n-form-item label="专业：">
                    <n-input v-model:value="item.major" />
                </n-form-item>
                <n-form-item label="学位：">
                    <n-input v-model:value="item.degree" />
                </n-form-item>
                <n-form-item label="时间：">
                    <n-grid :cols="2">
                        <n-form-item-gi path="nestedValue.path1">
                            <n-input v-model:value="item.startTime" />
                        </n-form-item-gi>
                        <n-form-item-gi path="nestedValue.path2">
                            <n-input v-model:value="item.endTime" />
                        </n-form-item-gi>
                    </n-grid>
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
    appStore.edus.splice(index, 1)
}

const addItem = () => {
    appStore.edus.push({
        school: '',
        startTime: '',
        endTime: '',
        major: '',
        degree: '',
    })
}
</script>