interface Tool {
  name: string
  url: string
  description: string
  category: string
  subcategory: string
  tags: string[]
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '')
      return domain
    } catch {
      return 'Unknown'
    }
  }

  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex-1">
        {/* 标题和链接 */}
        <div className="mb-3">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200 line-clamp-2"
          >
            {tool.name}
          </a>
          <div className="text-sm text-gray-500 mt-1">
            {getDomainFromUrl(tool.url)}
          </div>
        </div>

        {/* 描述 */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {tool.description}
        </p>

        {/* 分类标签 */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
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
  )
}
