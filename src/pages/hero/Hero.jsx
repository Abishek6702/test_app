import React from 'react';
import busImg from '../../assets/bg1.jpg';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='w-full h-full lg:px-30 md:px-30 sm:px-7 px-4 mt-[8ch] flex items-center justify-center flex-col hero relative'>
      <div className="relative w-full h-full">
        <img src={busImg} alt="Bus Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div className="text-center">
            <motion.h1 className="text-7xl font-bold text-neutral-50 leading-[1.15]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
            >
              Reserve Your Bus
              <span className="text-violet-400 tracking-wider"> Tickets</span>
            </motion.h1>
            <motion.p className="text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
            >
              Book your journey with us and enjoy a comfortable ride!
            </motion.p>
            <motion.button className="mt-4 bg-violet-400 text-white py-2 px-4 rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'linear', delay: 0.8 }}
            >
              Reserve Ticket
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

