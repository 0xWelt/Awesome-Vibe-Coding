// 简单的颜色管理器测试
const fs = require('fs');
const path = require('path');

// 读取工具数据
const toolsData = JSON.parse(
  fs.readFileSync('./public/data/tools.json', 'utf8')
);

console.log('=== 颜色管理器测试 ===');
console.log(`总工具数: ${toolsData.length}`);

// 提取子分类
const categoryMap = {};
toolsData.forEach((tool) => {
  if (tool.subcategory && tool.subcategory !== '__NO_SUBCATEGORY__') {
    if (!categoryMap[tool.category]) {
      categoryMap[tool.category] = new Set();
    }
    categoryMap[tool.category].add(tool.subcategory);
  }
});

// 转换为有序数组
const subcategoryOrder = {};
Object.keys(categoryMap).forEach((category) => {
  subcategoryOrder[category] = Array.from(categoryMap[category]).sort();
});

console.log('\n=== 子分类顺序 ===');
Object.keys(subcategoryOrder).forEach((category) => {
  console.log(`${category}: ${subcategoryOrder[category].join(', ')}`);
});

// 颜色方案
const colorSchemes = [
  'border-blue-200 bg-blue-50 text-blue-700',
  'border-red-200 bg-red-50 text-red-700',
  'border-purple-200 bg-purple-50 text-purple-700',
  'border-orange-200 bg-orange-50 text-orange-700',
  'border-pink-200 bg-pink-50 text-pink-700',
  'border-indigo-200 bg-indigo-50 text-indigo-700',
  'border-green-200 bg-green-50 text-green-700',
  'border-teal-200 bg-teal-50 text-teal-700',
  'border-yellow-200 bg-yellow-50 text-yellow-700',
  'border-cyan-200 bg-cyan-50 text-cyan-700',
];

// 模拟颜色分配
const colorMappings = {};
Object.keys(subcategoryOrder).forEach((category) => {
  colorMappings[category] = {};
  subcategoryOrder[category].forEach((subcategory, index) => {
    const colorIndex = index % colorSchemes.length;
    colorMappings[category][subcategory] = colorSchemes[colorIndex];
  });
});

console.log('\n=== 颜色分配结果 ===');
Object.keys(colorMappings).forEach((category) => {
  console.log(`\n${category}:`);
  Object.keys(colorMappings[category]).forEach((subcategory) => {
    console.log(`  ${subcategory}: ${colorMappings[category][subcategory]}`);
  });
});

console.log('\n=== 测试完成 ===');
