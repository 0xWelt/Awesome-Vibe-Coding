import React, { useState } from 'react';
import GitHubCorner from './GitHubCorner';

interface Tool {
  name: string;
  url: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
}

interface ToolCardProps {
  tool: Tool;
  onCategoryChange?: (category: string) => void;
  onSubcategoryChange?: (subcategory: string) => void;
}

export default function ToolCard({
  tool,
  onCategoryChange,
  onSubcategoryChange,
}: ToolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getSubcategoryColor = (subcategory: string) => {
    if (subcategory === '__NO_SUBCATEGORY__') {
      return '';
    }

    const colorMap: { [key: string]: string } = {
      'CLI Tools':
        'border-green-200 bg-green-50 text-green-700 dark:border-green-400/30 dark:bg-green-400/20 dark:text-green-100',
      'Standalone IDEs':
        'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-400/30 dark:bg-teal-400/20 dark:text-teal-100',
      'Web-based IDEs':
        'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-400/30 dark:bg-purple-400/20 dark:text-purple-100',
      'IDE Extensions':
        'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-100',
      'MCP Server Hub':
        'border-red-200 bg-red-50 text-red-700 dark:border-red-400/30 dark:bg-red-400/20 dark:text-red-100',
      'Mobile-first tools':
        'border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-400/30 dark:bg-yellow-400/20 dark:text-yellow-100',
      'Supporting Tools':
        'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/20 dark:text-indigo-100',
      'Vibe-Coding Community':
        'border-pink-200 bg-pink-50 text-pink-700 dark:border-pink-400/30 dark:bg-pink-400/20 dark:text-pink-100',
    };

    return (
      colorMap[subcategory] ||
      'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-400/30 dark:bg-purple-400/20 dark:text-purple-100'
    );
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
            className="dark:hover:text-primary-400 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-200 hover:text-primary-600 dark:text-white"
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
                <span className="dark:text-primary-400 ml-1 font-medium text-primary-600">
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
              className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:shadow-sm ${getSubcategoryColor(tool.subcategory)}`}
            >
              {tool.subcategory}
            </button>
          )}
          {tool.tags
            .filter(
              (tag) =>
                tag !== tool.category &&
                (tool.subcategory === '__NO_SUBCATEGORY__' ||
                  tag !== tool.subcategory)
            )
            .slice(0, isExpanded ? undefined : 4)
            .map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-sm dark:border-gray-400/30 dark:bg-gray-600/20 dark:text-gray-100"
              >
                {tag}
              </span>
            ))}
          {tool.tags.filter(
            (tag) =>
              tag !== tool.category &&
              (tool.subcategory === '__NO_SUBCATEGORY__' ||
                tag !== tool.subcategory)
          ).length > 4 &&
            !isExpanded && (
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 transition-all duration-200 hover:scale-105 dark:border-gray-400/30 dark:bg-gray-600/20 dark:text-gray-200">
                +
                {tool.tags.filter(
                  (tag) =>
                    tag !== tool.category &&
                    (tool.subcategory === '__NO_SUBCATEGORY__' ||
                      tag !== tool.subcategory)
                ).length - 4}
              </span>
            )}
        </div>
      </div>
    </div>
  );
}
