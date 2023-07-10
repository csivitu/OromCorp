import React from 'react'
import oromLogo from '../public/logo.webp'
import Image from 'next/image';
import localFont from '@next/font/local';
import Marquee from 'react-fast-marquee';
import Footer from './Footer';

const myFont = localFont({src: "../public/Canopee.woff2"})

const team = () => {
  return (
    <div id='team' className='container mx-auto px-4 content-center'>
      <h2 style = {myFont.style} className="text-4xl mb-4 text-center pt-9">Team</h2>

      <div className='flex p-7'>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={oromLogo} className='rounded-xl' alt='/' />
        </div>
        <div className='flex'>
          <div><h1 className='text-7xl font-bold p-3'>"</h1></div>
          <div className='pt-11'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>
      </div>

      <div className='flex text-center content-center'>
        <div className='w-full flex-1/4 p-5'>
          <Image
            src={oromLogo}
            alt="Picture 1"
          />
          <h5 className='text-3xl'>Name</h5>
          <p className="text-2xl mt-0 italic">designation</p>
        </div>
        <div className='w-full flex-1/4 p-5'>
          <Image
            src={oromLogo}
            alt="Picture 1"
          />
          <h5 className='text-3xl'>Name</h5>
          <p className="text-2xl mt-0 italic">designation</p>
        </div>
        <div className='w-full flex-1/4 p-5'>
          <Image
            src={oromLogo}
            alt="Picture 1"
          />
          <h5 className='text-3xl'>Name</h5>
          <p className="text-2xl mt-0 italic">designation</p>
        </div>
        <div className='w-full flex-1/4 p-5'>
          <Image
            src={oromLogo}
            alt="Picture 1"
          />
          <h5 className='text-3xl '>Name</h5>
          <p className="mt-0 italic text-2xl">designation</p>
        </div>
      </div>

    {/* <Footer /> */}
    </div>
  );
}

export default team