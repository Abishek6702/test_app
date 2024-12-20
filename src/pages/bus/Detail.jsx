import React from 'react';
import Bus from "../../assets/bus9.png";
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Destination from '../../components/destination/Destination';
import DepartTime from '../../components/departtime/DepartTime';
import Seat from '../../components/seat/Seat';

const Detail = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch] space-y-16'>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
        <div className="col-span-1 space-y-8">
          <img 
            src={Bus} 
            alt="Bus Detail" 
            className="w-full rounded-md object-contain aspect-video" 
          />            
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            Luxury Bus
            <span className="block text-base font-normal text-neutral-400 dark:text-neutral-500">
              (Bus Number Plate)
            </span>
          </h1>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">(4.5)</p>
          </div>
          <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id omnis inventore at labore reprehenderit dolorum placeat, aspernatur cum atque, eveniet deleniti sunt maiores est molestiae obcaecati unde accusantium nemo?
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          {/* Destination Card */}
          <Destination />

          {/* Departure Card */}
          <DepartTime />
        </div>
        
        {/* Seat Selection */}
        <Seat />

        {/* Checkout Button */}
        <div className="flex">
          <Link 
            to={'/bus/bus-details/checkout'}
            className='w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 transition ease-in-out duration-300'>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
