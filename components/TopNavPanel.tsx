interface TopNavPanelProps {
  categories: Record<string, string[]>;
  selectedCategory: string;
  selectedSubcategory: string;
  onCategorySelect: (_category: string) => void;
  onSubcategorySelect: (_subcategory: string) => void;
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
    <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm transition-colors duration-200 dark:bg-gray-900/95">
      <div className="container mx-auto px-4 py-3">
        {/* Primary Categories */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <button
              onClick={onClearSelection}
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
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
                className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
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
              className="dark:text-primary-400 dark:hover:text-primary-300 text-primary-600 hover:text-primary-700 ml-4 flex-shrink-0 text-sm"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Subcategories */}
        {selectedCategory &&
          (() => {
            const validSubcategories =
              categories[selectedCategory]?.filter(
                (sub) => sub !== '__NO_SUBCATEGORY__'
              ) || [];
            if (validSubcategories.length === 0) return null;

            return (
              <div className="mt-2 flex items-center space-x-2 overflow-x-auto pt-2">
                <button
                  onClick={() => onSubcategorySelect('')}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all ${
                    !selectedSubcategory
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  All
                </button>
                {validSubcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => onSubcategorySelect(subcategory)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all ${
                      selectedSubcategory === subcategory
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            );
          })()}
      </div>
    </div>
  );
}
