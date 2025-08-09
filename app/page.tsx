'use client'

import { useState, useEffect } from 'react'
import ToolCard from '@/components/ToolCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import Header from '@/components/Header'

interface Tool {
  name: string
  url: string
  description: string
  category: string
  subcategory: string
  tags: string[]
}

interface Category {
  name: string
  subcategories: {
    [key: string]: {
      name: string
      tools: Tool[]
    }
  }
}

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([])
  const [categories, setCategories] = useState<{[key: string]: Category}>({})
  const [filteredTools, setFilteredTools] = useState<Tool[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 加载数据
    const loadData = async () => {
      try {
        const [toolsResponse, categoriesResponse] = await Promise.all([
          fetch('/data/tools.json'),
          fetch('/data/categories.json')
        ])

        if (!toolsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Failed to load data files')
        }

        const toolsData = await toolsResponse.json()
        const categoriesData = await categoriesResponse.json()

        console.log('Loaded tools:', toolsData.length)
        console.log('Loaded categories:', Object.keys(categoriesData).length)

        setTools(toolsData)
        setCategories(categoriesData)
        setFilteredTools(toolsData)
      } catch (error) {
        console.error('Error loading data:', error)
        // 显示错误信息给用户
        setTools([])
        setCategories({})
        setFilteredTools([])
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    // 过滤工具
    let filtered = tools

    // 按搜索词过滤
    if (searchTerm) {
      filtered = filtered.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // 按分类过滤
    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory)
    }

    // 按子分类过滤
    if (selectedSubcategory) {
      filtered = filtered.filter(tool => tool.subcategory === selectedSubcategory)
    }

    setFilteredTools(filtered)
  }, [tools, searchTerm, selectedCategory, selectedSubcategory])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubcategory('')
  }

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedSubcategory('')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading awesome tools...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* 搜索和筛选区域 */}
        <div className="mb-8 space-y-4">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search tools, descriptions, or tags..."
          />

          <div className="flex flex-wrap gap-4 items-center">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              onCategoryChange={handleCategoryChange}
              onSubcategoryChange={handleSubcategoryChange}
            />

            {(searchTerm || selectedCategory || selectedSubcategory) && (
              <button
                onClick={clearFilters}
                className="btn-secondary text-sm"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* 结果统计 */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTools.length} of {tools.length} tools
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory && ` in ${selectedCategory}`}
            {selectedSubcategory && ` > ${selectedSubcategory}`}
          </p>
        </div>

        {/* 工具卡片网格 */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <ToolCard key={`${tool.name}-${index}`} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No tools found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
