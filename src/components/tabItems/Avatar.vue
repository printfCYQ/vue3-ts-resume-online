<template>
    <div class="p-10">
        <div class="w-full h-10 mb-4" :style="{ background: getBgColor }"></div>
        <n-form label-placement="left" label-align="left" :label-width="60" :show-require-mark="false">
            <n-form-item label="主题：" path="theme">
                <n-radio-group v-model:value="appStore.avatarInfo.theme" name="radiobuttongroup1">
                    <n-radio-button v-for="theme in themes" :key="theme.name" :value="theme.key" :label="theme.name"
                        @click="clickItem(theme)" />
                </n-radio-group>
            </n-form-item>
            <n-form-item label="头像：">
                <n-input placeholder="头像URL" v-model:value="appStore.avatarInfo.avatar" />
            </n-form-item>
            <n-form-item label="显示：" path="display">
                <n-switch v-model:value="appStore.avatarInfo.display" />
            </n-form-item>
            <n-form-item label="圆角：" path="circle">
                <n-switch v-model:value="appStore.avatarInfo.circle" />
            </n-form-item>
        </n-form>
    </div>
</template>
  
<script setup lang="ts">
import { useAppStore } from '@/store';
const appStore = useAppStore()

const themes = [
    {
        key: "1",
        name: "墨绿",
        primaryColor: "#084c41",
        secondaryColor: "#B1D0E0",
    },

    {
        key: "2",
        name: "山吹",
        primaryColor: "#f48a00",
        secondaryColor: "#fff8e6",
    },
    {
        key: "3",
        name: "蓝莹",
        primaryColor: "#5c9dff",
        secondaryColor: "#dbeafe",
    },
    {
        key: "4",
        name: "凝夜紫",
        primaryColor: "#B983FF",
        secondaryColor: "#F3F1F5",
    },
    {
        key: "5",
        name: "绿意",
        primaryColor: "#35b378",
        secondaryColor: "rgba(127, 226, 159, 0.48)",
    },
    {
        key: "6",
        name: "极客黑",
        primaryColor: "#141E27",
        secondaryColor: "#E0DDAA",
    },
];

const clickItem = (theme: any) => {
    appStore.primaryColor = theme.primaryColor
    appStore.secondaryColor = theme.secondaryColor
}
const getBgColor = computed(() => {
    return themes.filter(item => item.key === appStore.avatarInfo.theme)[0].primaryColor
})
</script>
  