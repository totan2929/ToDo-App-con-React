import React from 'react'

const Title = ({title}) => {
  return (
    <h1 className='text-4xl md:text-5xl text-center font-anton tracking-widest drop-shadow-sm'>{title}</h1>
  )
}

import PropTypes from 'prop-types'
Title.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Title