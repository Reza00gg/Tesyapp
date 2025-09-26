import React from 'react';
import { RefreshCw, ChevronDown } from 'lucide-react';

interface PullToRefreshProps {
  isRefreshing: boolean;
  pullDistance: number;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({
  isRefreshing,
  pullDistance,
}) => {
  const showIndicator = pullDistance > 10 || isRefreshing;
  const shouldTrigger = pullDistance > 60;

  return (
    <div
      className={`absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-300 ${
        showIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
      style={{
        height: Math.max(pullDistance, 60),
        paddingTop: Math.max(0, pullDistance - 40),
      }}
    >
      <div className="flex flex-col items-center">
        {isRefreshing ? (
          <>
            <RefreshCw className="w-6 h-6 text-orange-500 animate-spin mb-2" />
            <span className="text-sm text-gray-600">Refreshing...</span>
          </>
        ) : (
          <>
            <div
              className={`transition-transform duration-200 ${
                shouldTrigger ? 'rotate-180' : 'rotate-0'
              }`}
            >
              <ChevronDown className="w-6 h-6 text-orange-500 mb-2" />
            </div>
            <span className="text-sm text-gray-600">
              {shouldTrigger ? 'Release to refresh' : 'Pull to refresh'}
            </span>
          </>
        )}
      </div>
    </div>
  );
};