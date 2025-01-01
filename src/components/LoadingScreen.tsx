import { Loader2 } from 'lucide-react'
import React from 'react'

interface LoadingProps {
  message?: string
}

const LoadingScreen: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75'>
      <div className='flex flex-col p-2 items-center justify-center bg-gray-800 border border-gray-700 rounded-md bg-opacity-50'>
        <Loader2 className='animate-spin size-12 text-white' />
        <p className='text-white text-lg font-semibold'>{message}</p>
      </div>
    </div>
  )
}

export default LoadingScreen
