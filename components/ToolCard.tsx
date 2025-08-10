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
  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch {
      return 'Unknown';
    }
  };

  return (
    <div className="card flex h-full flex-col p-6">
      <div className="flex-1">
        {/* 标题和链接 */}
        <div className="mb-3">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-2 text-lg font-semibold text-gray-900 transition-colors duration-200 hover:text-primary-600"
          >
            {tool.name}
          </a>
          <div className="mt-1 text-sm text-gray-500">
            {getDomainFromUrl(tool.url)}
          </div>
        </div>

        {/* 描述 */}
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {tool.description}
        </p>

        {/* 分类标签 */}
        <div className="mb-4 flex flex-wrap gap-1">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-primary-100 text-primary-800 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              +{tool.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="mt-auto">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center text-sm"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}
