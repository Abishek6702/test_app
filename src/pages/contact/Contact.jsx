import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch]'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Feedback Form Section */}
        <section className='w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Feedback Form</h2>
          <form className='mt-4 space-y-4'>
            <div>
              <label className='block text-gray-700 dark:text-gray-300'>Name</label>
              <input type='text' className='w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white' placeholder='Your Name' />
            </div>
            <div>
              <label className='block text-gray-700 dark:text-gray-300'>Email</label>
              <input type='email' className='w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white' placeholder='Your Email' />
            </div>
            <div>
              <label className='block text-gray-700 dark:text-gray-300'>Message</label>
              <textarea className='w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white' rows='4' placeholder='Your Message'></textarea>
            </div>
            <button type='submit' className='bg-violet-600 text-white px-6 py-2 rounded-md'>Submit</button>
          </form>
        </section>

        {/* Contact Section */}
        <section className='w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Contact Information</h2>
          <div className='mt-4 space-y-2 text-gray-700 dark:text-gray-300'>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Email:</strong> contact@example.com</p>
          </div>

          <div className='mt-6 flex space-x-4'>
            <a href='#' className='text-gray-600 dark:text-gray-300 text-xl hover:text-violet-600'><FaFacebook /></a>
            <a href='#' className='text-gray-600 dark:text-gray-300 text-xl hover:text-violet-600'><FaTwitter /></a>
            <a href='#' className='text-gray-600 dark:text-gray-300 text-xl hover:text-violet-600'><FaInstagram /></a>
            <a href='#' className='text-gray-600 dark:text-gray-300 text-xl hover:text-violet-600'><FaLinkedin /></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
