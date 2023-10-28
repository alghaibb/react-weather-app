import React from 'react'

function TopButtons() {

  // Sample cities data
  const cities = [
    { id: 1, title: 'Melbourne' },
    { id: 2, title: 'New York' },
    { id: 3, title: 'Tokyo' },
    { id: 4, title: 'London' },
    { id: 5, title: 'Miami' },
  ];

  return (
    <div className='flex items-center justify-around my-6'>

      {/* Rendering city buttons */}
      {cities.map(city => (
        <button
          key={city.id}
          className='text-gray-100 text-lg font-medium'>
          {city.title}
        </button>

      ))}
    </div>
  );
}

export default TopButtons