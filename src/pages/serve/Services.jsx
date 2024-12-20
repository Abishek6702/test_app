import React from 'react'

const Services = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14'>
      {/* Guarantee Section */}
      <section className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Our Guarantee</h2>
        <p className='mt-4 text-gray-700 dark:text-gray-300'>
          We guarantee top-quality service and customer satisfaction. Your trust is our priority.
        </p>
      </section>

      {/* FAQ Section */}
      <section className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>FAQs</h2>
        <ul className='mt-4 space-y-4 text-gray-700 dark:text-gray-300'>
          <li><strong>Q:</strong> How can I contact support? <br /><strong>A:</strong> Reach us through our contact form or call us directly.</li>
          <li><strong>Q:</strong> What services do you offer? <br /><strong>A:</strong> We offer a range of services tailored to meet your needs.</li>
        </ul>
      </section>

      {/* Buses Section */}
      <section className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Our Buses</h2>
        <p className='mt-4 text-gray-700 dark:text-gray-300'>
          Experience comfort and reliability with our modern fleet of buses equipped with the latest amenities.
        </p>
      </section>

      {/* Amenities Section */}
      <section className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Amenities</h2>
        <ul className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
          <li>✔ Comfortable seating</li>
          <li>✔ Free Wi-Fi</li>
          <li>✔ Onboard refreshments</li>
          <li>✔ Charging ports</li>
        </ul>
      </section>
    </div>
  )
}

export default Services
