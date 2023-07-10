import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import oromLogo from '../public/logo.webp'
import appstore from '../public/appstore.png'
import playstore from '../public/playstore.png'
import localFont from '@next/font/local';
import Footer from './Footer';

const myFont = localFont({src: "../public/Crima.otf"})

const Main = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16 bg-[#172241] text-[#F3F4F4]'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-1'>
        <div style = {myFont.style} className='col-span-2'>
          <h3 className='pt-6  text-4xl'>Text here</h3>
          <h1 className='py-0 text-8xl'>One Liner</h1>

          <div className='border-2 boreder-[#C0C0C0] rounded-full italic w-1/2 pl-2.5 py-1 flex'>
            Download our app
            <Image src={appstore} className='h-6 w-6 ml-6 mr-3'/>
            <Image src={playstore} className='h-6 w-6'/>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={oromLogo} className='rounded-xl' alt='/' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;