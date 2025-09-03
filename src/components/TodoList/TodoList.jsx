import React from 'react'

const TodoList = ({children}) => {
  return (
    <div className='flex flex-col mt-7 rounded-md overflow-hidden shadow-2xl'>{children}</div>
  )
}

export default TodoList