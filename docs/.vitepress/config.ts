import { defineConfig } from 'vitepress';
import sidebar from './sidebarConfig.json';

export default defineConfig({
  title: '团队名',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    outlineTitle: '目录',
    nav: [{ text: 'Home', link: '/' }],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/haiserve-fe/articles' },
    ],
  },
});
