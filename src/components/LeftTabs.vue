<template>
    <div class="px-4">
        <n-tabs type="line" :default-value="tabValue" animated @update:value="updateTab">
            <n-tab-pane v-for="item in tabs" :key="item.name" :name="item.name" :tab="item.tab">
                <component :is="componentId"></component>
            </n-tab-pane>
        </n-tabs>
    </div>
</template>
<script lang="ts" setup>
import Avatar from './tabItems/Avatar.vue';
import Profile from './tabItems/Profile.vue';
import Education from './tabItems/Education.vue';
import Skill from './tabItems/Skill.vue';
import Work from './tabItems/Work.vue';
import Project from './tabItems/Project.vue';
import Award from './tabItems/Award.vue';

let componentId = ref<any>(markRaw(Avatar))
let tabValue = ref('avatar')
const tabs = [
    { tab: '头像设置', name: 'avatar', component: Avatar },
    { tab: '基本信息', name: 'profile', component: Profile },
    { tab: '教育背景', name: 'education', component: Education },
    { tab: '专业技能', name: 'skill', component: Skill },
    { tab: '工作经历', name: 'work', component: Work },
    { tab: '项目经历', name: 'project', component: Project },
    { tab: '更多信息', name: 'award', component: Award },
]

const updateTab = (value: string) => {
    componentId.value = markRaw(tabs.filter(item => item.name === value)[0].component)
}
</script>
<style scoped>
:deep(.n-tabs-pane-wrapper){
    height: calc(100vh - 122px);
    overflow: auto;
}
</style>