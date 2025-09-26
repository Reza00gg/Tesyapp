export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Address {
  id: string;
  label: string;
  address: string;
  isDefault: boolean;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  deliveryTime: string;
  restaurant: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'active' | 'delivered' | 'cancelled';
  date: string;
  deliveryTime: string;
  address: string;
  progress: number;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  code: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}