import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { HomeHeader } from '../components/Home/HomeHeader';
import { PromoBanner } from '../components/Home/PromoBanner';
import { FoodCategories } from '../components/Home/FoodCategories';
import { FoodGrid } from '../components/Home/FoodGrid';
import { PullToRefresh } from '../components/UI/PullToRefresh';
import { usePullToRefresh } from '../hooks/usePullToRefresh';
import { categories, featuredDeals, recentDeals } from '../data/mockData';

interface HomePageProps {
  onOpenCart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('burgers');
  const [searchQuery, setSearchQuery] = useState('');

  const handleRefresh = async () => {
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
  };

  const {
    containerRef,
    isRefreshing,
    pullDistance,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = usePullToRefresh(handleRefresh);

  const filteredFoods = recentDeals.filter(food => {
    const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <HomeHeader onOpenCart={onOpenCart} />
      
      <div
        ref={containerRef}
        className="relative overflow-y-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <PullToRefresh isRefreshing={isRefreshing} pullDistance={pullDistance} />
        
        <div style={{ transform: `translateY(${Math.min(pullDistance, 80)}px)` }}>
          <PromoBanner 
            deal={featuredDeals[0]} 
            onOrderNow={() => console.log('Order now clicked')} 
          />
          
          {/* Search Bar */}
          <div className="px-4 mb-4">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search food, drink, etc..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>
              <button className="bg-gray-100 p-3 rounded-2xl hover:bg-gray-200 transition-colors">
                <Filter size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <FoodCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          <FoodGrid
            foods={filteredFoods}
            title="Recent Deals 🔥"
          />
        </div>
      </div>
    </div>
  );
};