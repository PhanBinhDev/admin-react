import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { SIDEBAR_ITEM } from '@/utils/const'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}>
      <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 flex flex-col border-r border-gray-700'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'>
          <Menu size={24} />
        </motion.button>
        <nav className='mt-8 flex-grow'>
          {SIDEBAR_ITEM.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.name} to={item.path}>
                {
                  <motion.div
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.9 }}
                    className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                    <Icon
                      size={20}
                      style={{ color: item.color, minWidth: '20px' }}
                    />
                    <AnimatePresence>
                      {isSidebarOpen && (
                        <motion.span
                          className='ml-4 whitespace-normal'
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.15, delay: 0.45 }}>
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                }
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar
