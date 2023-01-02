import { defineStore } from 'pinia'
export interface AvatarInfoType {
    avatar: string
    display: boolean
    circle: boolean
    theme: string
}
export interface ProfileType {
    userName: string
    description: string
    phone: string
    email: string
    github: string
    homePage: string
    workYear: number
    workPlace: string
    position: string
}

export interface SkillType {
    skillName: string
    skillDesc?: string
    skillStar: number
}

export interface EduType {
    school: string
    startTime: string
    endTime: string
    major: string
    degree: string
}

export interface AwardType {
    name: string;
    time: string;
}
export interface WorkType {
    company: string;
    department: string;
    startTime: string;
    endTime: string;
    description: string;
}
export interface ProjectType {
    name: string;
    role: string;
    startTime: string;
    endTime: string;
    description: string;
    content: string;
}
interface AppStateType {
    count: number
    primaryColor: string
    secondaryColor: string
    avatarInfo: AvatarInfoType
    profile: ProfileType
    skills: SkillType[]
    edus: EduType[]
    awards: AwardType[]
    works: WorkType[]
    projects: ProjectType[]
}
export const useAppStore = defineStore('app', {
    state: (): AppStateType => ({
        count: 0,
        primaryColor: "#084c41",
        secondaryColor: "#B1D0E0",
        avatarInfo: {
            theme: "1",
            avatar: 'https://p3-passport.byteimg.com/img/user-avatar/8b29c46c806762d72e9cb19a43b490dd~180x180.image',
            display: true,
            circle: true,
        },
        profile: {
            userName: 'CYQ',
            description: 'CYQ的理想三旬',
            phone: '1514766****',
            email: '459987870@qq.com',
            github: 'https://github.com/printfCYQ',
            homePage: 'https://github.com/printfCYQ',
            workYear: 3,
            workPlace: '大连',
            position: '前端开发工程师',
        },
        skills: [
            {
                skillName: 'HTML / CSS',
                skillDesc: '',
                skillStar: 5
            },
            {
                skillName: 'TypeScript / JavaScript',
                skillDesc: '熟练 JavaScript，丰富的 ts 项目经验',
                skillStar: 3
            },
            {
                skillName: 'Express/Koa',
                skillDesc: '丰富的 NodeJS 实践以及开源经验',
                skillStar: 2
            },
            {
                skillName: 'VUE / 前端工程化',
                skillDesc: '大型前端项目经验',
                skillStar: 4
            },
        ],
        edus: [
            {
                school: 'XXXX大学',
                startTime: '2016.09',
                endTime: '2020.06',
                major: '计算机科学与技术',
                degree: '本科',
            }
        ],
        awards: [
            { name: '英语 CET6', time: '2015' },
            { name: '前端练习生 分享讲师', time: '2020.10' },
            { name: '前端早早聊 分享讲师', time: '2021.07' },
        ],
        works: [
            {
                company: '蚂蚁集团',
                department: '体验技术部',
                startTime: '2018.06',
                endTime: '至今',
                description: '1. 使用 React + Dva.js + Ant Design 技术栈开发企业业务管理后台\n2. 负责 XXXX 产品 XXXX 的可视分析模块产品能力建设\n3. 帮助项目工程化，添加 CICD 发布流程，接入页面告警和埋点上报',
            },
            {
                company: '腾讯',
                department: '大数据部',
                startTime: '2017.06',
                endTime: '2017.12',
                description: '1. 封装企业的 JS-SDK，使开发者可快速上手，结合 React 技术栈作为前端模板\n2. 使用 Next.js 作为中间层，再结合 Redis 和 Docker 做一个 Node 端开发模板\n3. 结合 qiankun 微前端框架，使用微前端的思路管理多个应用\n\n',
            },
            {
                company: '百度',
                department: '前端实习生',
                startTime: '2017.03',
                endTime: '2017.05',
                description: '1. 使用 Vue 来实现平台功能和逻辑\n2. 再用 ECharts 来对数据挖掘分析后的可视化结果进行展示',
            },
        ],
        projects: [
            {
                name: '在线流程图',
                role: '前端负责人',
                startTime: '2017.03',
                endTime: '2017.05',
                description: '模仿在线流程图 processon 实现在线流程图工具',
                content: '项目难点\n1. 项目从0到1的框架设计和开发 \n 2. 产品体验精雕细琢的打磨 \n 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率'
            },
            {
                name: "低代码平台",
                role: "核心开发者",
                startTime: '2017.03',
                endTime: '2017.05',
                description: '通过拖拽生成代码、集成 ant-design 、@antd/charts 等组件库',
                content: '项目难点1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率'
            },
            {
                name: "在线简历生成器",
                role: "独立开发者",
                startTime: '2017.03',
                endTime: '2017.05',
                description: '在线填写简历，一键导出 PDF',
                content: '项目难点\n1. 前端在线渲染PDF \n2. PDF 中样式设置'
            },
        ],
    }),
    persist: true, // 持久化
    actions: {
        addCount() {
            this.count++
        }
    }
})
