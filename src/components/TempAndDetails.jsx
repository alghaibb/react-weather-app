import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-gray-300'>
        <p>Windy</p>
      </div>

      {/* Weather Details Display Row */}
      <div className='flex flex-row items-center justify-between text-gray-300 py-3'>
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Weather icon"
          className='w-20' />

        <p className='text-5xl'>34°</p>

        <div className='flex flex-col space-y-2'>

          {/* Feels like */}
          <div className='flex font-light text-sm items-center'>
            <UilTemperature size={18} className='mr-1' />
            Feels Like:
            <span className='font-medium ml-1'>32°</span>
          </div>

          {/* Humidity */}
          <div className='flex font-light text-sm items-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>65%</span>
          </div>

          {/* Windspeed */}
          <div className='flex font-light text-sm items-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>11 km/h</span>
          </div>

        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-gray-300 text-sm py-3'>
        
        <UilSun />
        <p className='font-light'>
          Rise: <span className='font-medium ml-1 whitespace-nowrap'>6:30 AM</span>
        </p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>
          Set: <span className='font-medium ml-1'>7:30 PM</span>
        </p>
        <p className='font-light'>|</p>

        <UilArrowUp />
        <p className='font-light'>
          High: <span className='font-medium ml-1'>21°</span>
        </p>
        <p className='font-light'>|</p>

        <UilArrowDown />
        <p className='font-light'>
          Low: <span className='font-medium ml-1'>11°</span>
        </p>

      </div>

    </div>
  );
}

export default TempAndDetails;
