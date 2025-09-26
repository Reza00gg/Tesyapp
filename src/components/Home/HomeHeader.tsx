import React from 'react';
import { MapPin, ShoppingCart, Bell } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface HomeHeaderProps {
  onOpenCart: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ onOpenCart }) => {
  const { state } = useApp();

  return (
    <div className="bg-white px-4 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <MapPin size={20} className="text-orange-500" />
          <div>
            <p className="text-sm text-gray-600">Deliver to</p>
            <p className="font-medium text-gray-900">
              {state.selectedAddress?.address || 'My Home, Kabul'}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ShoppingCart size={24} />
            {state.cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.cart.length}
              </span>
            )}
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Bell size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};