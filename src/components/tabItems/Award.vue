<template>
    <div class="p-10 h-full overflow-auto">
        <n-card :title="'更多信息' + (index + 1)" class="mb-2" v-for="(item, index) in appStore.awards" :key="index"
            closable @close="handleClose(index)">
            <n-form label-placement="left" label-align="left" :label-width="60" :show-require-mark="false">
                <n-form-item label="信息：">
                    <n-input v-model:value="item.name" />
                </n-form-item>
                <n-form-item label="时间：">
                    <n-input v-model:value="item.time" />
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
    appStore.awards.splice(index, 1)
}

const addItem = () => {
    appStore.awards.push(
        { name: '', time: '' },
    )
}
</script>