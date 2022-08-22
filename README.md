# haiserve-fe

## 🌍 持续部署

### Netlify

<https://haiserve-articles.netlify.app/>

### GitHub Pages

<https://haiserve-fe.github.io/articles/>

## 📖 分享流程

1. 将 template 文件夹拷贝到相应文件夹内，目录结构为：docs/category/topic

```sh
cp -R docs/template docs/react/hooks
```

2. 根据模板，发挥你的才华完成一篇文章

3. 在 `/docs/index.md` 中的 `topic` 和 `title` 中添加文章信息

4. 在 `/docs/.vitepress/config.ts` 中的 `nav` 和 `sidebar` 中配置你的文章

## 🛠 本地开发

```sh
yarn install
yarn dev
```
