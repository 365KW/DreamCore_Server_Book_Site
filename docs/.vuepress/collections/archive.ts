import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
    type: 'post',
    dir: 'archive',
    title: '存档页面' ,
    autoFrontmatter: {
        title: true, // 自动生成标题
        createTime: true, // 自动生成创建时间
        permalink: true, // 自动生成永久链接
        transform: (data, context, locale) => { // 自定义转换
            data.foo ??= 'foo'
            return data
        }
    }
})