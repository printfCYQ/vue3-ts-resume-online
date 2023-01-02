<template>
    <div>
        <div class="flex justify-center mt-5 text-2xl">{{ profile.userName }}</div>
        <div class="my-4 text-lg">{{ profile.description }}</div>
        <div v-for="item in items" :key="item.icon" class="flex items-center mt-2">
            <!-- <div :class="item.icon" class="text-sm " /> -->
            <img :src="item.icon" class="text-sm text-white" alt="">
            <div class="text-xs ml-2 break-all"> {{ item.value }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ProfileType } from '@/store';
import phone from '@/assets/phone.svg';
import email from '@/assets/email.svg';
import github from '@/assets/github.svg';
import home from '@/assets/home.svg';
import place from '@/assets/place.svg';
import year from '@/assets/year.svg';
import position from '@/assets/position.svg';
const props = defineProps<{
    profile: ProfileType;
}>()
const items = ref<Array<{
    icon: string,
    value: string
}>>([])
items.value = [
    { icon: phone, value: props.profile.phone },
    { icon: email, value: props.profile.email },
    { icon: github, value: props.profile.github },
    { icon: home, value: props.profile.homePage },
    { icon: place, value: `工作地点：${props.profile.workPlace}` },
    { icon: year, value: `工作经验：${props.profile.workYear}` },
    { icon: position, value: `职位：${props.profile.position}` },
]

watch(props.profile, (newValue, oldValue) => {
    items.value = [
        { icon: phone, value: props.profile.phone },
        { icon: email, value: props.profile.email },
        { icon: github, value: props.profile.github },
        { icon: home, value: props.profile.homePage },
        { icon: place, value: `工作地点：${props.profile.workPlace}` },
        { icon: year, value: `工作经验：${props.profile.workYear}` },
        { icon: position, value: `职位：${props.profile.position}` },
    ]
})
</script>