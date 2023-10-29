import React from 'react'

function TimeAndLocation() {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-gray-300 text-xl font-light '>
          Saturday, 28 October 2023 | Local time: 9:36 PM
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-gray-300 text-3xl font-bold'>
          Melbourne, Australia
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation