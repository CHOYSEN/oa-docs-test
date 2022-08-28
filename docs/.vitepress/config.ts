import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '团队名',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      {
        text: 'React',
        items: [
          { text: 'React useEffect 前世今生', link: '/react/useEffect/index' },
        ],
      },
      {
        text: 'Vue',
        items: [],
      },
      {
        text: 'React Native',
        items: [],
      },
      {
        text: 'Technology',
        items: [],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/haiserve-fe/articles' },
    ],
  },
});
