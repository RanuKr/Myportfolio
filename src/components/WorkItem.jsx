import React from 'react'

// eslint-disable-next-line react/prop-types
const WorkItem = ({ year, title, details, link }) => {
  return (
    <div className='my-4'>
      <h2 className='text-2xl font-bold'>{year}</h2>
      <a href={link} target='_blank' rel='noopener noreferrer' className='text-blue-500 underline'>
        {title}
      </a>
      <p>{details}</p>
    </div>
  )
}

export default WorkItem
