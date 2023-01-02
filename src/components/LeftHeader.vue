<template>
    <div class="flex justify-between items-center px-2 border-b-2 border-gray-300 border-opacity-50">
        <n-space class="flex items-center">
            <img class="w-20" src="../static/logo.png" alt="">
            <div class="text-lg font-bold">在线简历生成器</div>
        </n-space>
        <n-space>
            <n-button type="primary" :loading="loading" @click="save">
                <template #icon>
                    <div class="i-ic:baseline-arrow-circle-down text-4xl" />
                </template>
                保存
            </n-button>
            <n-button type="info" @click="reset">
                <template #icon>
                    <div class="i-ic:twotone-restart-alt text-4xl" />
                </template>
                重置
            </n-button>
            <n-button type="warning" @click="github">
                <template #icon>
                    <img src="../assets/github.svg" />
                </template>
                github
            </n-button>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import NProgress from 'nprogress';
const appStore = useAppStore()
const loading = ref<boolean>(false)

const save = async () => {
    loading.value = true
    NProgress.start()
    await downloadPdf()
    NProgress.done()
    loading.value = false
}

const downloadPdf = () => {
    return new Promise((resolve, reject) => {
        window.scrollTo({ top: 0 });
        const htmlElement = document.getElementById("pdfDom");
        html2canvas(htmlElement!, {
            height: htmlElement?.offsetHeight,
            width: htmlElement?.offsetWidth,
            useCORS: true,
            allowTaint: true,
        }).then((canvas) => {
            const doc = new jsPDF();
            doc.addImage(canvas, "image/jpeg", 0, 0, 210, 297); //单位是毫米
            doc.save("resume.pdf");
            resolve("success");
        });
    });
};
const reset = () => {
    appStore.$reset()
}

const github = () => {
    window.open('https://www.daidu.com')
}
</script>