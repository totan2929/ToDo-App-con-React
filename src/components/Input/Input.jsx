import { useState } from 'react'

const Input = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const value = title.trim()
    if (value === '') return
    addTodo(value)
    setTitle('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') submit(e)
  }

  return (
    <form onSubmit={submit} className='mt-6 relative flex items-center gap-2'>
      <div className='absolute top-0 left-0 w-12 h-12 flex items-center justify-center pointer-events-none'>
        <span className='border border-gray-500 focus-within:border-blue-500 w-5 h-5 rounded-full flex items-center justify-center'></span>
      </div>

      <input
        type="text"
        className='w-full pl-12 pr-4 py-3 bg-gray-600 rounded-md focus:outline-none focus:shadow-lg focus:border-blue-500 transition-all duration-300 ease-in-out placeholder:italic font-inter'
        placeholder="Nueva tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKey}
      />

      <button
        type="submit"
        className='px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-300 ease-in-out'
      >
        Agregar
      </button>
    </form>
  )
}

import PropTypes from 'prop-types'
Input.propTypes = {
  addTodo: PropTypes.func.isRequired,
}


export default Input
