import React from 'react';
import { Home, ShoppingBag, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: 'home' | 'orders' | 'profile';
  onTabChange: (tab: 'home' | 'orders' | 'profile') => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'orders' as const, label: 'My Orders', icon: ShoppingBag },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center py-2 px-4 transition-all duration-200 ${
                  isActive
                    ? 'text-orange-500 scale-105'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon size={24} className="mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 w-8 h-1 bg-orange-500 rounded-t-full transition-all duration-200" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};