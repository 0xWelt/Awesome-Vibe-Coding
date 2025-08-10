import React, { useState } from 'react';

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
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="card flex h-full flex-col p-6">
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
          <p
            className={`text-sm leading-relaxed text-gray-600 transition-all duration-300 dark:text-gray-300 ${
              isExpanded ? '' : 'line-clamp-3'
            }`}
          >
            {tool.description}
          </p>
          {tool.description.length > 120 && (
            <button
              onClick={toggleExpanded}
              className="dark:text-primary-400 dark:hover:text-primary-300 mt-2 text-xs font-medium text-primary-600 transition-colors duration-200 hover:text-primary-700"
            >
              {isExpanded ? '收起' : '展开'}
            </button>
          )}
        </div>

        {/* 分类标签 */}
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-sm dark:border-blue-400/30 dark:bg-blue-400/20 dark:text-blue-100">
            {tool.category}
          </span>
          <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-sm dark:border-purple-400/30 dark:bg-purple-400/20 dark:text-purple-100">
            {tool.subcategory}
          </span>
          {tool.tags
            .filter((tag) => tag !== tool.category && tag !== tool.subcategory)
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
            (tag) => tag !== tool.category && tag !== tool.subcategory
          ).length > 4 &&
            !isExpanded && (
              <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 transition-all duration-200 hover:scale-105 dark:border-gray-400/30 dark:bg-gray-600/20 dark:text-gray-200">
                +
                {tool.tags.filter(
                  (tag) => tag !== tool.category && tag !== tool.subcategory
                ).length - 4}
              </span>
            )}
        </div>
      </div>
    </div>
  );
}
