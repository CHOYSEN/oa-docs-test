import chalk from 'chalk';
import prompts from 'prompts';
import fs from 'fs';
import path from 'path';

const configPath = path.resolve('docs/.vitepress', 'sidebarConfig.json');
const categoryMap = [
  { title: 'Technology', value: 'technology' },
  { title: 'React', value: 'react' },
  { title: 'React Native', value: 'react-native' },
  { title: 'Vue', value: 'vue' },
];

const run = async () => {
  const { category } = await prompts({
    type: 'select',
    name: 'category',
    message: '请选择一个目录:',
    choices: categoryMap,
  });
  if (!category) {
    console.log(chalk.red('目录不能为空.'));
    return;
  }

  const { topic } = await prompts({
    type: 'text',
    name: 'topic',
    message: '请输入文章的主题（即文件夹名称）:',
  });
  if (!topic) {
    console.log(chalk.red('主题不能为空.'));
    return;
  }

  const { title } = await prompts({
    type: 'text',
    name: 'title',
    message: '请输入文章的标题:',
  });
  if (!title) {
    console.log(chalk.red('标题不能为空.'));
    return;
  }

  const categoryPath = path.resolve('docs', category);
  const topicPath = path.join(categoryPath, topic);
  const articlePath = path.join(topicPath, 'index.md');

  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath);
  }
  if (fs.existsSync(topicPath)) {
    console.log(chalk.red('该分类已存在.'));
    return;
  }
  fs.mkdirSync(topicPath);
  fs.writeFileSync(articlePath, `# ${title}`);

  const config = fs.readFileSync(configPath, 'utf-8');
  const sidebar = JSON.parse(config);
  const categoryTitle = categoryMap.find(
    (item) => item.value === category
  ).title;
  sidebar
    .find((item) => item.text === categoryTitle)
    .items.push({
      text: title,
      link: `/${category}/${topic}/index`,
    });
  const data = JSON.stringify(sidebar, null, 2);
  fs.writeFileSync(configPath, data);

  console.log(chalk.green(`你的文章生成在：${articlePath}`));
  console.log(chalk.green('Success! Have fun writing:)'));
};

run();
