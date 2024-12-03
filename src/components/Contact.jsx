import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa'; // Removed FaInstagram

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      
      {/* Social Media Links */}
      <div className='flex justify-center items-center gap-6 py-4'>
        <a 
          href="https://github.com/RanuKr" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-[#001b5e] hover:text-gray-600'
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://www.linkedin.com/in/ranu-kumar-b03120284/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-[#001b5e] hover:text-gray-600'
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Contact Links */}
      <div className='flex justify-center items-center gap-6 py-4'>
        <a 
          href="tel:+917091727303" 
          className='flex items-center text-[#001b5e] hover:text-gray-600'
        >
          <FaPhone className='mr-2' /> +91 7091727303
        </a>
        <a 
          href="mailto:kumar.ranu9386@gmail.com" 
          className='flex items-center text-[#001b5e] hover:text-gray-600'
        >
          <FaEnvelope className='mr-2' /> kumar.ranu9386@gmail.com
        </a>
      </div>

      {/* Contact Form */}
      <form 
        action="https://getform.io/f/bqoovvwb" 
        method='POST' 
        encType='multipart/form-data'
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input 
              className='border-2 rounded-lg p-3 flex border-gray-300' 
              type="text" 
              name='name' 
              required 
            />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input 
              className='border-2 rounded-lg p-3 flex border-gray-300' 
              type="text" 
              name='phone' 
              required 
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input 
            className='border-2 rounded-lg p-3 flex border-gray-300' 
            type="email" 
            name='email'
            required 
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input 
            className='border-2 rounded-lg p-3 flex border-gray-300' 
            type="text" 
            name='subject'
            required 
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea 
            className='border-2 rounded-lg p-3' 
            rows='10' 
            name='message'
            required 
          />
        </div>
        <button 
          type='submit' 
          className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-blue-700 transition-colors'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
