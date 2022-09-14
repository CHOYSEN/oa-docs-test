import chalk from 'chalk';
import prompts from 'prompts';
import fs from 'fs';

const run = async () => {
  // todo: 自定义title
  const { category } = await prompts({
    type: 'select',
    name: 'category',
    message: 'Please select a category: ',
    choices: [
      { title: 'React', value: 'react' },
      { title: 'React Native', value: 'react-native' },
      { title: 'Vue', value: 'vue' },
      { title: 'Technology', value: 'technology' },
    ],
  });
  if (!category) {
    console.log(chalk.red('Please select a category.'));
    return;
  }

  const { topic } = await prompts({
    type: 'text',
    name: 'topic',
    message: 'Please enter a topic as the folder name: ',
  });
  if (!topic) {
    console.log(chalk.red('Please enter a topic.'));
    return;
  }

  const { title } = await prompts({
    type: 'text',
    name: 'title',
    message: 'Please enter the title of your article: ',
  });
  if (!title) {
    console.log(chalk.red('Please enter the title.'));
    return;
  }

  const __cwd = process.cwd();
  const folderName = `${__cwd}/docs/${category}/${topic}`;
  if (fs.existsSync(folderName)) {
    console.log(chalk.red('The path already exists.'));
    return;
  }
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.md`, `# ${title}`);

  const sidebarConfig = fs.readFileSync(`${__cwd}/sidebarConfig.json`, 'utf-8');
  const config = JSON.parse(sidebarConfig);
  const sidebar = config.sidebar;
  sidebar[sidebar.findIndex((item) => item.key === category)].items.push({
    text: title,
    link: `/${category}/${topic}/index`,
  });

  const data = JSON.stringify(config, null, 2);
  fs.writeFileSync('sidebarConfig.json', data);
  console.log(
    chalk.green(`Success! Complete your article in ${folderName}/index.md.`)
  );
  console.log(chalk.green('Have fun writing:)'));
};

run();
