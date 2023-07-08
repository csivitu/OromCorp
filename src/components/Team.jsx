import React from 'react'
import oromLogo from '../public/logo.webp'
import Image from 'next/image';
import localFont from '@next/font/local';

const myFont = localFont({src: "../public/Canopee.woff2"})

const team = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-slate-100'>
      <div>
        <h1 style = {myFont.style} className='w-full h-screen text-center content-centre'>TEAM</h1>
      </div>
      <div className='max-w-[1240px] m-auto flex gap-1'>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={oromLogo} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-2'>
        <div><h1 className='text-7xl'>"</h1></div>
          <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        
      </div>
    </div>
  );
}

export default team