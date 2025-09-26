import React from 'react';
import { Truck, Clock } from 'lucide-react';
import { Order } from '../../types';

interface OrderCardProps {
  order: Order;
  onTrackOrder: (orderId: string) => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, onTrackOrder }) => {
  const statusColors = {
    active: 'text-green-600 bg-green-50',
    delivered: 'text-gray-600 bg-gray-50',
    cancelled: 'text-red-600 bg-red-50',
  };

  const statusLabels = {
    active: 'Active',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-100 p-2 rounded-lg">
            <Truck size={20} className="text-gray-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">#{order.id}</p>
            <p className="text-sm text-gray-600">{order.date}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
          {statusLabels[order.status]}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {order.items.slice(0, 2).map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.name}</p>
            </div>
            <span className="text-sm text-gray-600">{item.quantity}x</span>
          </div>
        ))}
        {order.items.length > 2 && (
          <p className="text-sm text-gray-600 ml-13">
            +{order.items.length - 2} more items
          </p>
        )}
      </div>

      {order.status === 'active' && (
        <>
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">On the way</span>
              <span className="text-gray-600">{order.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">RST</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${order.progress}%` }}
                />
              </div>
              <span className="text-sm font-medium">You</span>
            </div>
          </div>
          
          <button
            onClick={() => onTrackOrder(order.id)}
            className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Tracking
          </button>
        </>
      )}

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <span className="text-lg font-bold text-gray-900">Total: ${order.total.toFixed(2)}</span>
        {order.status === 'delivered' && (
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Reorder
          </button>
        )}
      </div>
    </div>
  );
};