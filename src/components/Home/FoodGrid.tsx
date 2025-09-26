import React from 'react';
import { Plus, Star, Clock } from 'lucide-react';
import { FoodItem } from '../../types';
import { useApp } from '../../context/AppContext';

interface FoodGridProps {
  foods: FoodItem[];
  title: string;
}

export const FoodGrid: React.FC<FoodGridProps> = ({ foods, title }) => {
  const { dispatch } = useApp();

  const handleAddToCart = (food: FoodItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: food });
  };

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <button className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover"
              />
              <button
                onClick={() => handleAddToCart(food)}
                className="absolute bottom-2 right-2 bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-1 truncate">{food.name}</h4>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{food.description}</p>
              
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  <Star size={14} className="text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{food.rating}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span className="text-sm">{food.deliveryTime}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${food.price}</span>
                <span className="text-xs text-gray-500">{food.restaurant}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};