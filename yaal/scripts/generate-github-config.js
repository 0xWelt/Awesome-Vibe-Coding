import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function generateGitHubConfig() {
  // 显示帮助信息
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Usage: node generate-github-config.js

Automatic file detection:
  - Checks parent directory first: ../yaal.config.yaml
  - Falls back to local directory: ./yaal.config.yaml

Examples:
  node generate-github-config.js                    # Automatic detection
`);
    return;
  }

  try {
    // 自动查找配置文件：先检查父目录，再检查本地目录
    const parentConfigPath = path.resolve(process.cwd(), '../yaal.config.yaml');
    const localConfigPath = path.resolve(process.cwd(), 'yaal.config.yaml');
    let configPath;

    if (fs.existsSync(parentConfigPath)) {
      configPath = parentConfigPath;
      console.log(`📁 Using parent directory config: ${configPath}`);
    } else if (fs.existsSync(localConfigPath)) {
      configPath = localConfigPath;
      console.log(`📁 Using local directory config: ${configPath}`);
    } else {
      console.error(
        `❌ yaal.config.yaml not found in parent or local directory. Please create this file with your GitHub repository URL.`
      );
      process.exit(1);
    }

    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configContent) || {};

    if (!config.github) {
      console.error(
        'GitHub URL not found in yaal.config.yaml. Please add "github: https://github.com/owner/repo"'
      );
      process.exit(1);
    }

    const url = config.github;
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);

    if (!match) {
      console.error(
        `Invalid GitHub URL format: ${url}. Expected: https://github.com/owner/repo`
      );
      process.exit(1);
    }

    const repositoryName = `/${match[2].replace(/\.git$/, '')}`;
    const owner = match[1];
    const repo = match[2].replace(/\.git$/, '');

    // 读取README获取标题和描述
    // 使用与配置文件相同的优先级逻辑
    let readmePath;
    const parentReadmePath = path.resolve(process.cwd(), '../README.md');
    const localReadmePath = path.resolve(process.cwd(), 'README.md');

    if (fs.existsSync(parentReadmePath)) {
      readmePath = parentReadmePath;
      console.log(`📁 Using parent directory README: ${readmePath}`);
    } else if (fs.existsSync(localReadmePath)) {
      readmePath = localReadmePath;
      console.log(`📁 Using local directory README: ${readmePath}`);
    } else {
      console.error('❌ README.md not found in parent or local directory');
      process.exit(1);
    }

    const readmeContent = fs.readFileSync(readmePath, 'utf-8');

    const titleMatch = readmeContent.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : 'Awesome List';

    let description = '';
    const readmeLines = readmeContent.split(/\r?\n/);
    let foundTitle = false;
    for (let line of readmeLines) {
      line = line.trim();
      if (!foundTitle && line.startsWith('# ')) {
        foundTitle = true;
        continue;
      }
      if (
        foundTitle &&
        line &&
        !line.startsWith('#') &&
        !line.startsWith('[')
      ) {
        description = line.replace(/^>/, '').trim();
        break;
      }
    }
    if (!description) {
      description = 'A curated list of awesome resources';
    }

    // 生成 GitHub 配置文件
    const githubConfig = {
      repository: `${owner}/${repo}`,
      url: `https://github.com/${owner}/${repo}`,
      repositoryName: repositoryName,
      owner: owner,
      repo: repo,
    };

    // 写入配置文件
    const configOutputPath = path.join(process.cwd(), 'lib', 'githubConfig.ts');
    const configContentOutput = `// Auto-generated GitHub configuration
export const githubConfig = ${JSON.stringify(githubConfig, null, 2)};
export const siteConfig = {
  title: "${title}",
  description: "${description}",
  repository: "${owner}/${repo}",
  url: "https://github.com/${owner}/${repo}",
  repositoryName: "${repositoryName}",
  owner: "${owner}",
  repo: "${repo}"
};
`;

    // 确保 lib 目录存在
    const libDir = path.dirname(configOutputPath);
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
    }

    fs.writeFileSync(configOutputPath, configContentOutput);

    console.log(`✅ GitHub configuration generated:`);
    console.log(`   Repository: ${githubConfig.repository}`);
    console.log(`   URL: ${githubConfig.url}`);
  } catch (error) {
    console.error('❌ Error generating GitHub configuration:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith('generate-github-config.js')
) {
  generateGitHubConfig();
}
