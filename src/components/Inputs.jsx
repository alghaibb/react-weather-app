import React from 'react';
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons';


function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type="text"
          placeholder='Search...'
          className='text-xl text-gray-900 p-2 focus:outline-none w-full shadow-xl capitalize rounded-lg'
        />
        <UilSearch
          size={25}
          className='text-gray-300 hover:text-gray-50 hover:scale-125 duration-300 transition active:duration-150 ease-in-out transform active:scale-110 cursor-pointer ' />

        <UilLocationPinAlt
          size={25}
          className='text-gray-300 hover:text-gray-50 hover:scale-125 duration-300 transition-transform active:duration-150 ease-in-out transform active:scale-110 cursor-pointer ' />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button name='metric' className='text-lg text-gray-300 hover:text-gray-50 hover:scale-125 duration-300 transition active:duration-150 ease-in-out transform active:scale-110'>
          °C
        </button>

        <p className='text-md text-gray-300 mx-2 pointer-events-none '>|</p>

        <button name='imperial' className='text-lg text-gray-300 hover:text-gray-50 hover:scale-125 duration-300 transition active:duration-150 ease-in-out transform active:scale-110'>
          °F
        </button>
      </div>
    </div>
  )
}

export default Inputs 