// 颜色管理系统 - 确保子分类颜色的一致性

// 定义颜色方案 - 移除蓝色，避免与一级分类冲突
export const colorSchemes = [
  'border-red-200 bg-red-50 text-red-700 dark:border-red-400/30 dark:bg-red-400/20 dark:text-red-100',
  'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-400/30 dark:bg-purple-400/20 dark:text-purple-100',
  'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-100',
  'border-pink-200 bg-pink-50 text-pink-700 dark:border-pink-400/30 dark:bg-pink-400/20 dark:text-pink-100',
  'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/20 dark:text-indigo-100',
  'border-green-200 bg-green-50 text-green-700 dark:border-green-400/30 dark:bg-green-400/20 dark:text-green-100',
  'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-400/30 dark:bg-teal-400/20 dark:text-teal-100',
  'border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-400/30 dark:bg-yellow-400/20 dark:text-yellow-100',
  'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/20 dark:text-cyan-100',
  'border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-400/30 dark:bg-gray-400/20 dark:text-gray-100',
];

// 全局颜色管理器
class ColorManager {
  private categoryColors: { [key: string]: { [key: string]: string } } = {};
  private subcategoryOrder: { [key: string]: string[] } = {};

  // 设置子分类顺序
  setSubcategoryOrder(category: string, subcategories: string[]) {
    this.subcategoryOrder[category] = [...subcategories];

    if (!this.categoryColors[category]) {
      this.categoryColors[category] = {};
    }

    // 按顺序分配颜色
    subcategories.forEach((subcategory, index) => {
      const colorIndex = index % colorSchemes.length;
      this.categoryColors[category][subcategory] = colorSchemes[colorIndex];
    });
  }

  // 获取子分类颜色
  getSubcategoryColor(category: string, subcategory: string): string {
    if (subcategory === '__NO_SUBCATEGORY__') {
      return '';
    }

    if (!this.categoryColors[category]) {
      this.categoryColors[category] = {};
    }

    // 如果已经有颜色，直接返回
    if (this.categoryColors[category][subcategory]) {
      return this.categoryColors[category][subcategory];
    }

    // 如果有预定义顺序，使用顺序中的颜色
    const order = this.subcategoryOrder[category];
    if (order) {
      const index = order.indexOf(subcategory);
      if (index !== -1) {
        const colorIndex = index % colorSchemes.length;
        const color = colorSchemes[colorIndex];
        this.categoryColors[category][subcategory] = color;
        return color;
      }
    }

    // 对于新发现的子分类，基于名称哈希分配颜色
    const hash = this.hashCode(subcategory);
    const colorIndex = hash % colorSchemes.length;
    const color = colorSchemes[colorIndex];
    this.categoryColors[category][subcategory] = color;
    return color;
  }

  // 简单的哈希函数
  private hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  // 清除缓存
  clearCache() {
    this.categoryColors = {};
    this.subcategoryOrder = {};
  }
}

// 创建全局单例
export const colorManager = new ColorManager();

// 从工具数据中提取子分类顺序
export const extractSubcategoryOrder = (tools: any[]) => {
  const categoryMap: { [key: string]: Set<string> } = {};

  tools.forEach((tool) => {
    if (tool.subcategory && tool.subcategory !== '__NO_SUBCATEGORY__') {
      if (!categoryMap[tool.category]) {
        categoryMap[tool.category] = new Set();
      }
      categoryMap[tool.category].add(tool.subcategory);
    }
  });

  // 转换为有序数组并排序
  const result: { [key: string]: string[] } = {};
  Object.keys(categoryMap).forEach((category) => {
    result[category] = Array.from(categoryMap[category]).sort();
  });

  return result;
};

// 初始化颜色管理器
export const initializeColorManager = (tools: any[]) => {
  const subcategoryOrder = extractSubcategoryOrder(tools);

  Object.keys(subcategoryOrder).forEach((category) => {
    colorManager.setSubcategoryOrder(category, subcategoryOrder[category]);
  });
};
