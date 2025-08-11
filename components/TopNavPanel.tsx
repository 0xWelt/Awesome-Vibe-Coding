interface TopNavPanelProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onClearSelection: () => void;
}

export default function TopNavPanel({
  categories,
  selectedCategory,
  onCategorySelect,
  onClearSelection,
}: TopNavPanelProps) {
  return (
    <div className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur-sm transition-colors duration-200 dark:border-gray-700 dark:bg-gray-900/95">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <button
              onClick={onClearSelection}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategorySelect(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {selectedCategory && (
            <button
              onClick={onClearSelection}
              className="dark:text-primary-400 dark:hover:text-primary-300 ml-4 flex-shrink-0 text-sm text-primary-600 hover:text-primary-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
