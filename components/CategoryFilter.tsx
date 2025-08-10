interface Category {
  name: string;
  subcategories: {
    [key: string]: {
      name: string;
      tools: any[];
    };
  };
}

interface CategoryFilterProps {
  categories: { [key: string]: Category };
  selectedCategory: string;
  selectedSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}: CategoryFilterProps) {
  const categoryNames = Object.keys(categories);
  const selectedCategoryData = selectedCategory
    ? categories[selectedCategory]
    : null;
  const subcategoryNames = selectedCategoryData
    ? Object.keys(selectedCategoryData.subcategories)
    : [];

  return (
    <div className="flex flex-wrap gap-2">
      {/* 主分类筛选 */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="btn-secondary text-sm transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
      >
        <option value="">All Categories</option>
        {categoryNames.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* 子分类筛选 */}
      {selectedCategory && subcategoryNames.length > 0 && (
        <select
          value={selectedSubcategory}
          onChange={(e) => onSubcategoryChange(e.target.value)}
          className="btn-secondary text-sm transition-colors duration-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        >
          <option value="">All {selectedCategory}</option>
          {subcategoryNames.map((subcategory) => (
            <option key={subcategory} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
