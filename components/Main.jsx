import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import oromLogo from '../public/logo.webp'

const Main = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-slate-100'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-1'>
        <div className='col-span-2'>
          <h1 className='py-4 text-7xl'>TYPEWRITER TYPOGRAPHY</h1>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={oromLogo} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Main;