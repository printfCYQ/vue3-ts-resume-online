<template>
    <div v-if="avatarInfo.display" class="flex justify-center">
        <img class="w-30 h-30 mt-10" :class="avatarInfo.circle ? 'rounded-full' : ''" :src="avatarInfo.avatar" />
    </div>
</template>
  
<script setup lang="ts">
import { AvatarInfoType } from "@/store";

defineProps<{
    avatarInfo: AvatarInfoType
}>()
</script>