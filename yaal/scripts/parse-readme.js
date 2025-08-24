import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 解析README.md并提取软件信息
function parseReadme(readmePath) {
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');

  const lines = readmeContent.split('\n');
  const tools = [];
  const categoryDescriptions = {};
  const subcategoryDescriptions = {};

  let currentCategory = '';
  let currentSubcategory = '';

  // 提取标题和描述
  const titleMatch = readmeContent.match(/^#\s+(.+)$/m);
  if (!titleMatch) {
    console.error('❌ ERROR: README.md must start with # Title');
    console.error('   Example: # My Awesome List');
    process.exit(1);
  }
  const title = titleMatch[1].trim();

  let description = '';
  const readmeLines = readmeContent.split(/\r?\n/);

  // 找标题后的第一个非空非标题行
  let foundTitle = false;
  for (let i = 0; i < readmeLines.length; i++) {
    const line = readmeLines[i].trim();
    if (!foundTitle && line.startsWith('# ')) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line && !line.startsWith('#') && !line.startsWith('[')) {
      description = line.replace(/^>/, '').trim();
      break;
    }
  }

  if (!description) {
    console.error(
      '❌ ERROR: README.md must have a description after the title'
    );
    console.error('   Example: > A curated list of awesome tools');
    process.exit(1);
  }

  // 解析工具信息
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 匹配分类标题
    const categoryMatch = line.match(/^##\s+(.+)$/);
    if (categoryMatch) {
      currentCategory = categoryMatch[1].trim();
      // 检查下一行是否是分类描述
      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1].trim();
        if (
          nextLine &&
          !nextLine.startsWith('#') &&
          !nextLine.startsWith('-')
        ) {
          categoryDescriptions[currentCategory] = nextLine
            .replace(/^>/, '')
            .trim();
        }
      }
      continue;
    }

    // 匹配子分类标题
    const subcategoryMatch = line.match(/^###\s+(.+)$/);
    if (subcategoryMatch) {
      currentSubcategory = subcategoryMatch[1].trim();
      // 检查下一行是否是子分类描述
      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1].trim();
        if (
          nextLine &&
          !nextLine.startsWith('#') &&
          !nextLine.startsWith('-')
        ) {
          subcategoryDescriptions[`${currentCategory}::${currentSubcategory}`] =
            nextLine.replace(/^>/, '').trim();
        }
      }
      continue;
    }

    // 匹配工具条目 - 支持两种格式：
    // 1. - [名称](链接) - 描述
    // 2. #### [名称](链接)
    const toolMatch = line.match(/^-\s+\[([^\]]+)\]\(([^)]+)\)\s*-\s*(.+)$/);
    const titleToolMatch = line.match(/^####\s+\[([^\]]+)\]\(([^)]+)\)$/);

    if (toolMatch && currentCategory) {
      const name = toolMatch[1].trim();
      const url = toolMatch[2].trim();
      const description = toolMatch[3].trim();

      // 提取域名作为来源
      const domainMatch = url.match(/^https?:\/\/([^\/]+)/);
      const source = domainMatch ? domainMatch[1] : 'Unknown';

      tools.push({
        name,
        url,
        description,
        category: currentCategory,
        subcategory: currentSubcategory || '__NO_SUBCATEGORY__',
        source,
      });
    } else if (titleToolMatch && currentCategory) {
      const name = titleToolMatch[1].trim();
      const url = titleToolMatch[2].trim();

      // 对于 #### 格式，描述在后续行中（跳过空行）
      let description = '';
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (
          nextLine &&
          !nextLine.startsWith('#') &&
          !nextLine.startsWith('-')
        ) {
          description = nextLine.replace(/^["']|["']$/g, '').trim(); // 移除引号
          break;
        }
        // 如果遇到新的标题或列表项，停止查找
        if (nextLine.startsWith('#') || nextLine.startsWith('-')) {
          break;
        }
      }

      if (!description) {
        description = 'No description available';
      }

      // 提取域名作为来源
      const domainMatch = url.match(/^https?:\/\/([^\/]+)/);
      const source = domainMatch ? domainMatch[1] : 'Unknown';

      tools.push({
        name,
        url,
        description,
        category: currentCategory,
        subcategory: currentSubcategory || '__NO_SUBCATEGORY__',
        source,
      });
    }
  }

  return {
    title,
    description,
    tools,
    categoryDescriptions,
    subcategoryDescriptions,
  };
}

// 生成分类结构
function generateCategories(
  tools,
  categoryDescriptions,
  subcategoryDescriptions
) {
  const categories = {};

  tools.forEach((tool) => {
    if (!categories[tool.category]) {
      categories[tool.category] = {
        name: tool.category,
        description: categoryDescriptions[tool.category] || '',
        subcategories: {},
      };
    }

    const effectiveSubcategory = tool.subcategory || '__NO_SUBCATEGORY__';
    const subcategoryKey = `${tool.category}::${effectiveSubcategory}`;

    if (!categories[tool.category].subcategories[effectiveSubcategory]) {
      categories[tool.category].subcategories[effectiveSubcategory] = {
        name:
          effectiveSubcategory === '__NO_SUBCATEGORY__'
            ? tool.category
            : effectiveSubcategory,
        description: subcategoryDescriptions[subcategoryKey] || '',
        tools: [],
      };
    }

    categories[tool.category].subcategories[effectiveSubcategory].tools.push(
      tool
    );
  });

  return categories;
}

// 主函数
function main() {
  // 显示帮助信息
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Usage: node parse-readme.js

Automatic file detection:
  - Checks parent directory first: ../README.md
  - Falls back to local directory: ./README.md

Examples:
  node parse-readme.js                    # Automatic detection
`);
    return;
  }

  try {
    // 自动查找README文件：先检查父目录，再检查本地目录
    const parentReadmePath = path.resolve(process.cwd(), '../README.md');
    const localReadmePath = path.resolve(process.cwd(), 'README.md');
    let readmePath;

    if (fs.existsSync(parentReadmePath)) {
      readmePath = parentReadmePath;
      console.log(`📁 Using parent directory README: ${readmePath}`);
    } else if (fs.existsSync(localReadmePath)) {
      readmePath = localReadmePath;
      console.log(`📁 Using local directory README: ${readmePath}`);
    } else {
      console.error(
        `❌ README.md not found in parent or local directory. Please create this file.`
      );
      process.exit(1);
    }

    console.log(`Parsing README.md from: ${readmePath}`);

    // 检查文件是否存在
    if (!fs.existsSync(readmePath)) {
      console.error(`❌ ERROR: README.md not found at: ${readmePath}`);
      process.exit(1);
    }

    const {
      title,
      description,
      tools,
      categoryDescriptions,
      subcategoryDescriptions,
    } = parseReadme(readmePath);
    const categories = generateCategories(
      tools,
      categoryDescriptions,
      subcategoryDescriptions
    );

    // 创建数据目录 - 只保留public/data，移除重复的data目录
    const publicDataDir = path.join(__dirname, '..', 'public', 'data');

    // 确保数据目录存在
    if (!fs.existsSync(publicDataDir)) {
      fs.mkdirSync(publicDataDir, { recursive: true });
    }

    // 写入工具数据
    fs.writeFileSync(
      path.join(publicDataDir, 'tools.json'),
      JSON.stringify(tools, null, 2)
    );

    // 写入分类数据
    fs.writeFileSync(
      path.join(publicDataDir, 'categories.json'),
      JSON.stringify(categories, null, 2)
    );

    // 写入项目信息
    const projectData = {
      title,
      description,
      totalTools: tools.length,
      categories: Object.keys(categories).length,
    };
    fs.writeFileSync(
      path.join(publicDataDir, 'project.json'),
      JSON.stringify(projectData, null, 2)
    );

    console.log(`Parsing complete! Found ${tools.length} items`);
    console.log(`Categories: ${Object.keys(categories).length}`);
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);

    Object.keys(categories).forEach((category) => {
      const subcategories = Object.keys(categories[category].subcategories);
      const totalTools = subcategories.reduce(
        (sum, sub) =>
          sum + categories[category].subcategories[sub].tools.length,
        0
      );
      console.log(
        `- ${category}: ${subcategories.length} subcategories, ${totalTools} items`
      );
    });
  } catch (error) {
    console.error('❌ Error parsing README:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith('parse-readme.js')
) {
  main();
}
