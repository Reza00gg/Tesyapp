import React from 'react';
import { Deal } from '../../types';

interface PromoBannerProps {
  deal: Deal;
  onOrderNow: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ deal, onOrderNow }) => {
  return (
    <div className="mx-4 my-4">
      <div
        className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${deal.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col justify-center h-full max-w-xs">
          <h2 className="text-2xl font-bold mb-2">{deal.title}</h2>
          <p className="text-sm mb-4 opacity-90">{deal.description}</p>
          <button
            onClick={onOrderNow}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors w-fit"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};