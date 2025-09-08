import React from 'react'

const Todo = ({todo, handleSetCompleted, handleDelete}) => {

const {id, title, completed} = todo

  return (
    <div className='flex items-center justify-between bg-gray-600 border-b border-solid border-gray-500 p-4'>
        <div className='flex items-center'>
          { completed ? (
            <div onClick={() => handleSetCompleted(id)} className='bg-green-700 p-1 rounded-full cursor-pointer m-2'>
              <img className='h-4 w-4' src="./checkList.svg" alt="Check" />
            </div>
          ): (
            <span onClick={() => handleSetCompleted(id)} className='border-solid border border-gray-500 rounded-full w-5 h-5 cursor-pointer m-2'></span>

          )}
            <p className={`pl-3 ${completed ? "line-through" : ""}`}>
              {title}
            </p>    
        </div>
            <img onClick={() => handleDelete(id)} src="./delete.svg" alt="Delete" className='w-5 h-5 cursor-pointer transition-all duration-300 ease-in ' />
    </div>
  )
}

import PropTypes from 'prop-types'
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleSetCompleted: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}


export default Todo