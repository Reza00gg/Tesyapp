import { Category, FoodItem, Deal, Order } from '../types';

export const categories: Category[] = [
  { id: 'burgers', name: 'Burgers', icon: '🍔', color: 'bg-orange-100 text-orange-600' },
  { id: 'pizza', name: 'Pizza', icon: '🍕', color: 'bg-red-100 text-red-600' },
  { id: 'cookies', name: 'Cookies', icon: '🍪', color: 'bg-yellow-100 text-yellow-600' },
  { id: 'drinks', name: 'Drinks', icon: '🥤', color: 'bg-blue-100 text-blue-600' },
  { id: 'desserts', name: 'Desserts', icon: '🍰', color: 'bg-pink-100 text-pink-600' },
  { id: 'salads', name: 'Salads', icon: '🥗', color: 'bg-green-100 text-green-600' },
];

export const featuredDeals: Deal[] = [
  {
    id: '1',
    title: 'Up to 40% OFF on First Order',
    description: 'Use code: FIRST40',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    discount: '40%',
    code: 'FIRST40'
  }
];

export const recentDeals: FoodItem[] = [
  {
    id: '1',
    name: 'Chicken Burger',
    description: 'Juicy grilled chicken with fresh lettuce and tomatoes',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    category: 'burgers',
    rating: 4.5,
    deliveryTime: '10-20 min',
    restaurant: 'Burger Palace'
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Classic Italian pizza with fresh basil and mozzarella',
    price: 12.99,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    category: 'pizza',
    rating: 4.7,
    deliveryTime: '15-25 min',
    restaurant: 'Pizza Corner'
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan and croutons',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
    category: 'salads',
    rating: 4.3,
    deliveryTime: '5-15 min',
    restaurant: 'Healthy Bites'
  },
  {
    id: '4',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, gooey cookies with premium chocolate chips',
    price: 3.99,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    category: 'cookies',
    rating: 4.8,
    deliveryTime: '10-15 min',
    restaurant: 'Sweet Treats'
  }
];

export const mockOrders: Order[] = [
  {
    id: '123456',
    items: [
      { ...recentDeals[0], quantity: 1 },
      { ...recentDeals[2], quantity: 2 }
    ],
    total: 12.99,
    status: 'active',
    date: 'June 23 - 9:41 PM',
    deliveryTime: 'June 23 - 10:11 PM',
    address: 'My Home, Kabul',
    progress: 65
  },
  {
    id: '1680',
    items: [
      { ...recentDeals[1], quantity: 1 },
      { ...recentDeals[3], quantity: 2 }
    ],
    total: 12.99,
    status: 'delivered',
    date: 'Nov, 04 - 9:41 PM',
    deliveryTime: 'Nov, 04 - 10:15 PM',
    address: 'My Home, Kabul',
    progress: 100
  }
];