import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
    type: 'doc',
    dir: 'guide',
    title: '指南' ,
    autoFrontmatter: {
        title: true, // 自动生成标题
        createTime: true, // 自动生成创建时间
        permalink: true, // 自动生成永久链接
        transform: (data, context, locale) => { // 自定义转换
            data.foo ??= 'foo'
            return data
        }
    },
    sidebar: 'auto', // 自动生成导航结构
    sidebarCollapsed: true // 折叠状态：true-折叠 false-展开
})