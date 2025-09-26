import React from 'react';
import { Edit } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfileHeader: React.FC = () => {
  const { state } = useApp();

  if (!state.user) return null;

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-white px-4 py-6 border-b border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          {state.user.avatar ? (
            <img
              src={state.user.avatar}
              alt={state.user.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-xl font-bold text-gray-600">
              {getInitials(state.user.name)}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">{state.user.name}</h2>
          <p className="text-gray-600">{state.user.phone}</p>
        </div>
        <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Edit size={20} />
        </button>
      </div>
    </div>
  );
};