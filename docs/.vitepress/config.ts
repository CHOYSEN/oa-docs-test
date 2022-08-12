import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OOOOOOA",
  themeConfig: {
    sidebar: [
      // React 专题
      {
        text: "React 专题",
        items: [{ text: "Hooks 分享", link: "/react/hooks/index" }],
      },
      // React Native 专题
      {
        text: "React Native 专题",
        items: [{ text: "源码分享", link: "/react-native/source/index" }],
      },
    ],
  },
});
