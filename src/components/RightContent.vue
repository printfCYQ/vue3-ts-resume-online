<template>
    <div id="pdfDom" class="right-content  bg-gray-800 mx-8 my-4">
        <div class=" w-full h-full bg-white flex">
            <div class="w-50 text-white h-full px-4" :style="{ backgroundColor: appStore.primaryColor }">
                <PdfAvatar v-if="appStore.avatarInfo.avatar" :avatarInfo="appStore.avatarInfo" />
                <PdfProfile :profile="appStore.profile" />
                <PdfSkill v-if="appStore.skills.length > 0" :skills="appStore.skills" />
                <PdfEducation v-if="appStore.edus.length > 0" :edus="appStore.edus" />
                <PdfAward v-if="appStore.awards.length > 0" :awards="appStore.awards" />
            </div>
            <div class="flex-1 w-full h-full px-5 py-7 box-border">
                <PdfWork v-if="appStore.works.length > 0" :works="appStore.works" />
                <PdfProject v-if="appStore.projects.length > 0" :projects="appStore.projects" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/index';
const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.right-content {
    width: 210mm;
    height: 297mm;
    min-width: 210mm;
    min-height: 297mm;
}
</style>