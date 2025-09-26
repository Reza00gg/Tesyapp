import React from 'react';
import { HandPlatter as Translate, MapPin, CreditCard, Heart, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfileMenu: React.FC = () => {
  const { dispatch } = useApp();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const menuItems = [
    {
      category: 'General',
      items: [
        { icon: Translate, label: 'Language', value: 'English', onClick: () => {} },
        { icon: MapPin, label: 'Addresses', value: 'Home', onClick: () => {} },
        { icon: CreditCard, label: 'Payment Methods', value: 'HesabPay', onClick: () => {} },
        { icon: Heart, label: 'Favorites', value: '30+', onClick: () => {} },
        { icon: Settings, label: 'Settings', onClick: () => {} },
      ]
    },
    {
      category: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', onClick: () => {} },
      ]
    }
  ];

  return (
    <div className="px-4 py-6">
      {menuItems.map((section) => (
        <div key={section.category} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.category}</h3>
          <div className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="w-full flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon size={18} className="text-gray-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-gray-900">{item.label}</p>
                  </div>
                  {item.value && (
                    <span className="text-sm text-gray-500">{item.value}</span>
                  )}
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center space-x-2 p-4 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
      >
        <LogOut size={18} />
        <span className="font-medium">Logout</span>
      </button>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">Version 1.0.0</p>
      </div>
    </div>
  );
};