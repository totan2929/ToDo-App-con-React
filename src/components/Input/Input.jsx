import React from 'react'

const Input = () => {
  return (
    <div className='mt-6 relative'>
      <div className='absolute top-0 left-0 w-12 h-12 flex items-center justify-center pointer-events-none'>
        <span className='border border-gray-500 focus-within:border-blue-500 w-5 h-5 rounded-full flex items-center justify-center'></span>
      </div>
      <input
        type="text"
        className='w-full pl-12 pr-4 py-3 bg-gray-600 rounded-md focus:outline-none focus:shadow-lg focus:border-blue-500 transition-all duration-300 ease-in-out placeholder:italic font-inter'
        placeholder="Nueva tarea"
      />
    </div>
  )
}

export default Input