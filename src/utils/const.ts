import {
  BarChart,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users
} from 'lucide-react'

export const SIDEBAR_ITEM = [
  {
    name: 'Overview',
    icon: BarChart,
    color: '#6366f1',
    path: '/'
  },
  {
    name: 'Products',
    color: '#8b5cf6',
    icon: ShoppingBag,
    path: '/products'
  },
  {
    name: 'Users',
    color: '#EC4899',
    icon: Users,
    path: '/users'
  },
  {
    name: 'Sales',
    icon: DollarSign,
    color: '#10b981',
    path: '/sales'
  },
  {
    name: 'Orders',
    icon: ShoppingCart,
    color: '#f59e0b',
    path: '/orders'
  },
  {
    name: 'Analytics',
    icon: TrendingUp,
    color: '#3b82f6',
    path: '/analytics'
  },
  {
    name: 'Settings',
    icon: Settings,
    color: '#6ee7b7',
    path: '/settings'
  }
] as const
