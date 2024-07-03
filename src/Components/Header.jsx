// Header.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cart, logo, userlogo } from '../Assets'; // Assuming you have these assets imported correctly

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  return (
    <div className='w-full h-20 bg-white border-b-[1px] sticky z-50 top-0 border-b-gray-800'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
          <Link to='/'>
            <img className='w-28 cursor-pointer' src={logo} alt='Logo' />
          </Link>
        </div>
        <div className='flex justify-between gap-8 items-center'>
          <ul className='flex justify-between gap-8 items-center font-bold '>
            <li className='text-base text-black font-bold hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer '>
              Home
            </li>
            <li className='text-base text-black font-bold hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer '>
              Pages
            </li>
            <li className='text-base text-black font-bold hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer '>
              Shop
            </li>
            <li className='text-base text-black font-bold hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer '>
              Element
            </li>
            <li className='text-base text-black font-bold hover:text-orange-500 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer '>
              Blog
            </li>
            <button>Log in</button> {/* Assuming this button is for logging in */}
          </ul>
          <Link to={'/Cart'}>
            <div className='relative cursor-pointer'>
              <img className='w-6 cursor-pointer' src={cart} alt='Cart' />
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={'/login'}>
            <div className='w-10 h-10 text-black rounded-full cursor-pointer '>
              <img src={userInfo ? userInfo.image : userlogo} alt='User' />
            </div>
          </Link>
          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
