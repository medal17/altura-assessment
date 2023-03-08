import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();
    const route = location.pathname
    const linkFormating = 'text-gray-400 text-sm mx-4 hover:text-blue-600 cursor-pointer';
  return (
    <div className='shadow-lg py-3 bg-white fixed right-0 left-0 z-40 bg:white'>
        <div className='lg:w-4/6 md:w-full lg:mx-auto md:mx-4 mx-2 flex'>
            <div>
                <span className='bg-blue-600 rounded-lg py-1 font-bold px-3 mr-3 text-white text-lg'>
                    A
                </span>
                <span className='hidden lg:inline '>
                    Altura NFT
                </span>
            </div>
        
            <div className='my-auto lg:ml-20 sm:ml-2'>
                <span className={`${linkFormating}  ${route=='/'&&'text-blue-700 font-medium'}`}><Link to={'/'}>Home</Link></span>
                <span className={`${linkFormating}  ${route=='/explore'&&'text-blue-700 font-medium'}`}><Link to={'/explore'}>Explore</Link></span>
                <span className={linkFormating}>Pages</span>
            </div>
            <div className='hidden md:inline lg:ml-auto md:ml-7'>
                <span className='rounded-3xl border border-blue-600 px-3 py-1.5 text-xs 
                cursor-pointer text-blue-600 mx-3 hover: bg-blue-600,text-white'>Sign In</span>
                <span className='rounded-3xl border bg-blue-600 px-3 py-1.5 text-xs text-white'>Register</span>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar