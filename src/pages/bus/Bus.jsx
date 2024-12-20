import React from 'react';
import Bus1 from "../../assets/bus1.png";
import Bus2 from "../../assets/bus.png";
import Bus3 from "../../assets/bus5.png";
import Bus4 from "../../assets/bus4.png";
import Bus5 from "../../assets/bus7.png";
import Bus6 from "../../assets/bus6.png";
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Bus = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14'>
      {/* Search and filter */}
      <div className="w-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between">
        <div className="flex items-center gap-x-2.5 col-span-2">
          <input 
            type="text" 
            placeholder='Search buses...'  
            className='w-full text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900' 
          />
          <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
            <FaSearch />
          </button>  
        </div>

        <div className="col-span-2">
          <select 
            className="w-full text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
            <option value="">Select Bus Type</option>
            <option value="touristbus">Tourist Bus</option>
            <option value="privatebus">Private Bus</option>
            <option value="luxurybus">Luxury Bus</option>
            <option value="deluxbus">Delux Bus</option>
          </select>
        </div>
      </div>

      {/* Bus Cards */}
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {[Bus1, Bus2, Bus3, Bus4, Bus5, Bus6].map((bus, index) => (
          <Link key={index} to="/bus/bus-details" className='w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-xl p-4'>
            <img src={bus} alt={`Bus ${index + 1}`} className="w-full aspect-video object-contain object-center" />
            <div className="px-4 py-4 space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                  Tourist Bus
                </h1>
                <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">
                  60 Passengers
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bus;
