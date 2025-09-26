import React from 'react';
import { OrderCard } from '../components/Orders/OrderCard';
import { PullToRefresh } from '../components/UI/PullToRefresh';
import { usePullToRefresh } from '../hooks/usePullToRefresh';
import { useApp } from '../context/AppContext';

export const OrdersPage: React.FC = () => {
  const { state, dispatch } = useApp();

  const handleRefresh = async () => {
    // Simulate order status updates
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Update active orders progress
    state.orders.forEach(order => {
      if (order.status === 'active') {
        const newProgress = Math.min(order.progress + 10, 100);
        dispatch({
          type: 'UPDATE_ORDER',
          payload: {
            id: order.id,
            status: newProgress === 100 ? 'delivered' : 'active',
            progress: newProgress
          }
        });
      }
    });
  };

  const {
    containerRef,
    isRefreshing,
    pullDistance,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = usePullToRefresh(handleRefresh);

  const handleTrackOrder = (orderId: string) => {
    console.log('Tracking order:', orderId);
    // Here you would navigate to tracking page or show tracking modal
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white px-4 py-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
      </div>
      
      <div
        ref={containerRef}
        className="relative overflow-y-auto px-4 py-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <PullToRefresh isRefreshing={isRefreshing} pullDistance={pullDistance} />
        
        <div style={{ transform: `translateY(${Math.min(pullDistance, 80)}px)` }}>
          {state.orders.length > 0 ? (
            state.orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onTrackOrder={handleTrackOrder}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-6">When you place your first order, it will appear here.</p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors">
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};