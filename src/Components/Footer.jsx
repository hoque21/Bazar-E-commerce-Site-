import React from 'react';
import { FaUser, FaShoppingCart, FaClipboardCheck, FaQuestionCircle ,FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importing icons from Font Awesome

import { logo, payment } from '../Assets';

const Footer = () => {
  return (
    <div className='bg-black text-white py-20 font-title '>
      <div className='max-w-screen-xl grid grid-cols-4 mx-auto '>
        <div className='flex flex-col gap-6'>
          <a href='/src/Pages/Home.jsx'>
            <img className='w-28 cursor-pointer' src={logo} alt="" />
          </a>
          <p className='text-white text-sm tracking-wide'>
            ReactBd.com
          </p>
          <img className='w-48 h-18' src={payment} alt="" />
          <div className='flex  gap-2.5'>
            <a href="https://facebook.com" >
              <FaFacebook  size={32} color="white" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram size={32} color="white" />
            </a>
            <a href="https://whatsapp.com">
              <FaWhatsapp size={32} color="white" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter size={32} color="white" />
            </a>
            <a href="https://youtube.com">
              <FaYoutube size={32} color="white" />
            </a>
          </div>
        </div>

        <div >
            <p className='text-2xl font-semibold text-white mb-4'>Locate Us</p>
            <p>
              Address: Dhaka,Bangladesh<br />
              Name: Rafiul Hoque<br />
              Mobile: 011111111111
            </p>
        </div>

        <div>
            <p className='text-2xl font-semibold text-white mb-4'>Profile</p>
            <ul className="list-none p-0 m-0">
              <li className="flex items-center cursor-pointer mb-2 hover:text-gray-300">
                <FaUser className="mr-2" />
                <span>My Account</span>
              </li>
              <li className="flex items-center cursor-pointer mb-2 hover:text-gray-300">
                <FaShoppingCart className="mr-2" />
                <span>CheckOut</span>
              </li>
              <li className="flex items-center cursor-pointer mb-2 hover:text-gray-300">
                <FaClipboardCheck className="mr-2" />
                <span>Order Tracking</span>
              </li>
              <li className="flex items-center cursor-pointer mb-2 hover:text-gray-300">
                <FaQuestionCircle className="mr-2" />
                <span>Help and Support</span>
              </li>
            </ul>
        </div>

        <div className='flex justify-center flex-col items-center '>
            <input type="text" className='border px-12 py-2 text-sm bg-transparent' placeholder='Enter Your Email...' />
            <button className='px-5 py-3 mt-4 items-center justify-center rounded-full font-semibold hover:bg-green-500 hover:text-gray-600 bg-orange-400'>Subscribe Now</button>

        </div>


        
      </div>
    </div>
  );
};

export default Footer;
