import { motion } from 'framer-motion'

// Icons
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'

// Components
import Header from '@/components/common/Header'
import StatCard from '@/components/common/StatCard'
import SalesOverviewChart from '@/components/overview/SalesOverviewChart'
import CategoryDistributionChart from '@/components/overview/CategoryDistributionChart'
import SalesChannelChart from '@/components/overview/SalesChannelChart'

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Overview' />

      {/* main content */}
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-12'>
        {/* Stats */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard
            name='Total Sales'
            icon={Zap}
            value={'$12,345'}
            color='#6366f1'
          />
          <StatCard
            name='New Users'
            icon={Users}
            value={'1,281'}
            color='#8b5cf6'
          />
          <StatCard
            name='Total Products'
            icon={ShoppingBag}
            value={'529'}
            color='#ec4899'
          />
          <StatCard
            name='Conversion Rate'
            icon={BarChart2}
            value={'12.48%'}
            color='#10b981'
          />
        </motion.div>

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  )
}

export default OverviewPage
