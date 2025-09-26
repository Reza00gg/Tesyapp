import React from 'react';
import { Category } from '../../types';

interface FoodCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const FoodCategories: React.FC<FoodCategoriesProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="px-4 py-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex flex-col items-center space-y-2 min-w-20 transition-all duration-200 ${
              selectedCategory === category.id
                ? 'transform scale-105'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                selectedCategory === category.id
                  ? category.color
                  : 'bg-gray-100'
              }`}
            >
              {category.icon}
            </div>
            <span
              className={`text-sm font-medium ${
                selectedCategory === category.id
                  ? 'text-gray-900'
                  : 'text-gray-600'
              }`}
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};