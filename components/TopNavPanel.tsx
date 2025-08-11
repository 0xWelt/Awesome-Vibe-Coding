interface TopNavPanelProps {
  categories: Record<string, string[]>;
  selectedCategory: string;
  selectedSubcategory: string;
  onCategorySelect: (category: string) => void;
  onSubcategorySelect: (subcategory: string) => void;
  onClearSelection: () => void;
}

export default function TopNavPanel({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
  onClearSelection,
}: TopNavPanelProps) {
  const categoryKeys = Object.keys(categories);

  return (
    <div className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur-sm transition-colors duration-200 dark:border-gray-700 dark:bg-gray-900/95">
      <div className="container mx-auto px-4 py-3">
        {/* Primary Categories */}
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

            {categoryKeys.map((category) => (
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

          {(selectedCategory || selectedSubcategory) && (
            <button
              onClick={onClearSelection}
              className="dark:text-primary-400 dark:hover:text-primary-300 ml-4 flex-shrink-0 text-sm text-primary-600 hover:text-primary-700"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Subcategories */}
        {selectedCategory && categories[selectedCategory]?.length > 0 && (
          <div className="mt-3 flex items-center space-x-2 overflow-x-auto border-t pt-3 dark:border-gray-700">
            <span className="flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400">
              {selectedCategory}:
            </span>
            <button
              onClick={() => onSubcategorySelect('')}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                !selectedSubcategory
                  ? 'bg-primary-100 dark:bg-primary-900/30 dark:text-primary-300 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            {categories[selectedCategory].map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => onSubcategorySelect(subcategory)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedSubcategory === subcategory
                    ? 'bg-primary-100 dark:bg-primary-900/30 dark:text-primary-300 text-primary-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
