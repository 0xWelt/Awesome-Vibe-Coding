import React, { useState } from 'react';
import GitHubCorner from './GitHubCorner';
import { colorManager } from '@/lib/colorManager';

interface Tool {
  name: string;
  url: string;
  description: string;
  category: string;
  subcategory: string;
}

interface ToolCardProps {
  tool: Tool;
  onCategoryChange?: (_category: string) => void;
  onSubcategoryChange?: (_subcategory: string) => void;
}

export default function ToolCard({
  tool,
  onCategoryChange,
  onSubcategoryChange,
}: ToolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSubcategoryColor = (category: string, subcategory: string) => {
    if (subcategory === '__NO_SUBCATEGORY__') {
      return '';
    }

    // 使用全局颜色管理器获取颜色
    return colorManager.getSubcategoryColor(category, subcategory);
  };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch {
      return 'Unknown';
    }
  };

  const toggleExpanded = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card relative flex h-full flex-col p-6">
      {/* GitHub Corner */}
      <GitHubCorner url={tool.url} />

      <div className="flex-1">
        {/* 标题和链接 */}
        <div className="mb-4">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-primary-400 hover:text-primary-600 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-200 dark:text-white"
          >
            {tool.name}
          </a>
          <div className="mt-1 text-sm text-gray-500 transition-colors duration-200 dark:text-gray-400">
            {getDomainFromUrl(tool.url)}
          </div>
        </div>

        {/* 描述 */}
        <div className="mb-4">
          <div onClick={toggleExpanded} className="cursor-pointer">
            <div
              className={`text-sm leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-300 ${
                isExpanded ? 'max-h-none' : 'line-clamp-2'
              }`}
            >
              {tool.description}
              {!isExpanded && tool.description.length > 80 && (
                <span className="dark:text-primary-400 text-primary-600 ml-1 font-medium">
                  ...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 分类标签 */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onCategoryChange?.(tool.category)}
            className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-sm dark:border-blue-400/30 dark:bg-blue-400/20 dark:text-blue-100"
          >
            {tool.category}
          </button>
          {tool.subcategory !== '__NO_SUBCATEGORY__' && (
            <button
              onClick={() => {
                onCategoryChange?.(tool.category);
                onSubcategoryChange?.(tool.subcategory);
              }}
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:shadow-sm ${getSubcategoryColor(tool.category, tool.subcategory)}`}
            >
              {tool.subcategory}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
