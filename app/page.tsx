'use client';

import { useState, useEffect } from 'react';
import ToolCard from '@/components/ToolCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import Header from '@/components/Header';
import { config } from '@/lib/config';

interface Tool {
  name: string;
  url: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
}

interface Category {
  name: string;
  subcategories: {
    [key: string]: {
      name: string;
      tools: Tool[];
    };
  };
}

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [categories, setCategories] = useState<{ [key: string]: Category }>({});
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 加载数据 - 使用统一配置
    const loadData = async () => {
      try {
        // 使用统一的路径配置
        const toolsPath = config.runtime.getDataPath('tools.json');
        const categoriesPath = config.runtime.getDataPath('categories.json');

        console.log('Loading data from paths:', { toolsPath, categoriesPath });

        const [toolsResponse, categoriesResponse] = await Promise.all([
          fetch(toolsPath),
          fetch(categoriesPath),
        ]);

        if (!toolsResponse.ok || !categoriesResponse.ok) {
          throw new Error(
            `Failed to load data files: ${toolsResponse.status} ${categoriesResponse.status}`
          );
        }

        const toolsData = await toolsResponse.json();
        const categoriesData = await categoriesResponse.json();

        console.log('Loaded tools:', toolsData.length);
        console.log('Loaded categories:', Object.keys(categoriesData).length);

        setTools(toolsData);
        setCategories(categoriesData);
        setFilteredTools(toolsData);
      } catch (error) {
        console.error('Error loading data:', error);
        // 显示错误信息给用户
        setTools([]);
        setCategories({});
        setFilteredTools([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // 过滤工具
    let filtered = tools;

    // 按搜索词过滤
    if (searchTerm) {
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // 按分类过滤
    if (selectedCategory) {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // 按子分类过滤
    if (selectedSubcategory) {
      filtered = filtered.filter(
        (tool) => tool.subcategory === selectedSubcategory
      );
    } else if (selectedCategory) {
      // 如果选择了分类但没有选择子分类，包含该分类下所有工具（包括General子分类）
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    setFilteredTools(filtered);
  }, [tools, searchTerm, selectedCategory, selectedSubcategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedSubcategory('');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 transition-colors duration-200 dark:bg-gray-900">
        <div className="text-center">
          <div className="dark:border-primary-400 mx-auto size-12 animate-spin rounded-full border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600 transition-colors duration-200 dark:text-gray-300">
            Loading awesome tools...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-200 dark:bg-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* 搜索和筛选区域 */}
        <div className="mb-8 space-y-4">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search tools, descriptions, or tags..."
          />

          <div className="flex flex-wrap items-center gap-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategoryChange={handleCategoryChange}
              onSubcategoryChange={handleSubcategoryChange}
            />

            {(searchTerm || selectedCategory || selectedSubcategory) && (
              <button onClick={clearFilters} className="btn-secondary text-sm">
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* 结果统计 */}
        <div className="mb-6">
          <p className="text-gray-600 transition-colors duration-200 dark:text-gray-300">
            Showing {filteredTools.length} of {tools.length} tools
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory}`}
            {selectedSubcategory && ` > ${selectedSubcategory}`}
          </p>
        </div>

        {/* 工具卡片网格 */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool, index) => (
              <ToolCard
                key={`${tool.name}-${index}`}
                tool={tool}
                onCategoryChange={handleCategoryChange}
                onSubcategoryChange={handleSubcategoryChange}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl text-gray-400 transition-colors duration-200 dark:text-gray-500">
              🔍
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-700 transition-colors duration-200 dark:text-gray-200">
              No tools found
            </h3>
            <p className="text-gray-500 transition-colors duration-200 dark:text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
