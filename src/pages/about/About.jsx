import React from 'react'

const About = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14'> 
      {/* About Details Section */}
      <section className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>About Us</h2>
        <p className='mt-4 text-gray-700 dark:text-gray-300'>
          We are a leading bus booking service dedicated to providing safe, comfortable, and reliable travel experiences. Our mission is to make bus travel accessible and hassle-free for everyone.
        </p>
      </section>

      {/* Bus Booking Details Section */}
      <section className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Bus Booking Made Easy</h2>
        <p className='mt-4 text-gray-700 dark:text-gray-300'>
          Book your bus tickets with ease through our user-friendly platform. Choose from a variety of routes, schedules, and bus types to suit your travel needs.
        </p>
        <ul className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
          <li>✔ Easy online booking</li>
          <li>✔ Secure payment options</li>
          <li>✔ Instant booking confirmation</li>
        </ul>
      </section>
    </div>
  )
}

export default About
