import React from 'react';
import { ProfileHeader } from '../components/Profile/ProfileHeader';
import { ProfileMenu } from '../components/Profile/ProfileMenu';
import { PullToRefresh } from '../components/UI/PullToRefresh';
import { usePullToRefresh } from '../hooks/usePullToRefresh';

export const ProfilePage: React.FC = () => {
  const handleRefresh = async () => {
    // Simulate profile data refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const {
    containerRef,
    isRefreshing,
    pullDistance,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = usePullToRefresh(handleRefresh);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ProfileHeader />
      
      <div
        ref={containerRef}
        className="relative overflow-y-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <PullToRefresh isRefreshing={isRefreshing} pullDistance={pullDistance} />
        
        <div style={{ transform: `translateY(${Math.min(pullDistance, 80)}px)` }}>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};