import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { LoginForm } from './components/Auth/LoginForm';
import { BottomNavigation } from './components/Layout/BottomNavigation';
import { HomePage } from './pages/HomePage';
import { OrdersPage } from './pages/OrdersPage';
import { ProfilePage } from './pages/ProfilePage';
import { mockOrders } from './data/mockData';

function AppContent() {
  const { state, dispatch } = useApp();
  const [activeTab, setActiveTab] = useState<'home' | 'orders' | 'profile'>('home');
  const [showLogin, setShowLogin] = useState(false);

  // Initialize mock data
  useEffect(() => {
    if (state.isAuthenticated && state.orders.length === 0) {
      mockOrders.forEach(order => {
        dispatch({ type: 'ADD_ORDER', payload: order });
      });
    }
  }, [state.isAuthenticated, state.orders.length, dispatch]);

  const handleOpenCart = () => {
    console.log('Opening cart with items:', state.cart);
    // Here you would open cart modal or navigate to cart page
  };

  if (!state.isAuthenticated) {
    return (
      <LoginForm 
        onToggleMode={() => setShowLogin(!showLogin)} 
      />
    );
  }

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onOpenCart={handleOpenCart} />;
      case 'orders':
        return <OrdersPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onOpenCart={handleOpenCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentPage()}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;