import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
// Lazy-loaded Pages
const OverviewPage = lazy(() => import('@/pages/OverviewPage'))
const ProductsPage = lazy(() => import('@/pages/ProductsPage'))
const UsersPage = lazy(() => import('@/pages/UsersPage'))
const SalesPage = lazy(() => import('@/pages/SalesPage'))
const OrdersPage = lazy(() => import('@/pages/OrdersPage'))
const AnalyticsPage = lazy(() => import('@/pages/AnalyticsPage'))
const SettingsPage = lazy(() => import('@/pages/SettingsPage'))

// Lazy-loaded Components
const Sidebar = lazy(() => import('@/components/Sidebar'))
const LoadingScreen = lazy(() => import('./components/LoadingScreen'))

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
        <div className='absolute inset-0 backdrop-blur-sm'></div>
      </div>
      <Sidebar />
      <div className='flex-1 overflow-auto relative z-10'>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path='/' element={<OverviewPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/sales' element={<SalesPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/analytics' element={<AnalyticsPage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
