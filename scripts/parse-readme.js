import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 解析README.md并提取软件信息
function parseReadme() {
  const readmePath = path.join(__dirname, '..', 'README.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');

  const lines = readmeContent.split('\n');
  const tools = [];
  let currentCategory = '';
  let currentSubcategory = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 检测主分类 (## 开头)
    if (
      line.startsWith('## ') &&
      !line.includes('Table of Contents') &&
      !line.includes('Star History') &&
      !line.includes('Contributors') &&
      !line.includes('License') &&
      !line.includes('Open-Source Projects') &&
      !line.includes('Learning Resources')
    ) {
      currentCategory = line.replace('## ', '').trim();
      currentSubcategory = '';
      continue;
    }

    // 检测子分类 (### 开头)
    if (line.startsWith('### ') && !line.startsWith('### [')) {
      currentSubcategory = line.replace('### ', '').trim();
      continue;
    }

    // 检测软件条目 (#### [软件名](链接) 或 ### [软件名](链接) 格式)
    const toolMatch = line.match(/^(####|###) \[([^\]]+)\]\(([^)]+)\)/);
    if (toolMatch) {
      const name = toolMatch[2];
      const url = toolMatch[3];

      // 查找描述（下一行或下几行）
      let description = '';
      let j = i + 1;
      while (j < lines.length && j < i + 5) {
        const nextLine = lines[j].trim();
        if (
          nextLine &&
          !nextLine.startsWith('####') &&
          !nextLine.startsWith('###') &&
          !nextLine.startsWith('##')
        ) {
          description = nextLine;
          break;
        }
        j++;
      }

      // 清理描述文本
      description = description.replace(/^>/, '').trim();

      // 对于Supporting Tools等没有子分类的，使用主分类作为子分类
      const effectiveSubcategory = currentSubcategory || currentCategory;

      tools.push({
        name,
        url,
        description,
        category: currentCategory,
        subcategory: effectiveSubcategory,
        tags: [currentCategory, effectiveSubcategory].filter(Boolean),
      });
    }
  }

  return tools;
}

// 生成分类数据
function generateCategories(tools) {
  const categories = {};

  tools.forEach((tool) => {
    if (!categories[tool.category]) {
      categories[tool.category] = {
        name: tool.category,
        subcategories: {},
      };
    }

    if (
      tool.subcategory &&
      !categories[tool.category].subcategories[tool.subcategory]
    ) {
      categories[tool.category].subcategories[tool.subcategory] = {
        name: tool.subcategory,
        tools: [],
      };
    }

    if (tool.subcategory) {
      categories[tool.category].subcategories[tool.subcategory].tools.push(
        tool
      );
    }
  });

  return categories;
}

// 主函数
function main() {
  console.log('开始解析README.md...');

  const tools = parseReadme();
  const categories = generateCategories(tools);

  // 创建数据目录 - 只保留public/data，移除重复的data目录
  const publicDataDir = path.join(__dirname, '..', 'public', 'data');

  if (!fs.existsSync(publicDataDir)) {
    fs.mkdirSync(publicDataDir, { recursive: true });
  }

  // 写入工具数据
  const toolsJson = JSON.stringify(tools, null, 2);
  fs.writeFileSync(path.join(publicDataDir, 'tools.json'), toolsJson);

  // 写入分类数据
  const categoriesJson = JSON.stringify(categories, null, 2);
  fs.writeFileSync(path.join(publicDataDir, 'categories.json'), categoriesJson);

  // 移除旧的data目录
  const oldDataDir = path.join(__dirname, '..', 'data');
  if (fs.existsSync(oldDataDir)) {
    fs.rmSync(oldDataDir, { recursive: true, force: true });
  }

  console.log(`解析完成！共找到 ${tools.length} 个工具`);
  console.log(`分类数量: ${Object.keys(categories).length}`);

  // 输出统计信息
  Object.keys(categories).forEach((category) => {
    const subcategoryCount = Object.keys(
      categories[category].subcategories
    ).length;
    const toolCount = Object.values(categories[category].subcategories).reduce(
      (sum, sub) => sum + sub.tools.length,
      0
    );
    console.log(
      `- ${category}: ${subcategoryCount} 个子分类, ${toolCount} 个工具`
    );
  });
}

main();
