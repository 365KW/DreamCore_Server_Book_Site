/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '指南', link: '/guide/' },
  { text: '文档', link: '/documents/to-do/' },
  { text: '归档', link: '/archive/to-do/' },
  { text: '配置游戏', link: '/guide/config_game/' },
])
