"use client"
import Link from 'next/link'
import {AiOutlineMenu, AiOutLineClose} from 'react-icons/ai'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import oromLogo from '../public/logo.webp'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
    
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300' >
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text'>
            <Link href = '/'>
                <Image
                    src={oromLogo}
                    alt='company logo'
                    width={100}
                    height={100}
                />
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href = '/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href = '/#team'>Our Team</Link>
                </li>
                <li className='p-4'>
                    <Link href = '/#award'>Awards</Link>
                </li>
                <li className='p-4'>
                    <Link href = '/#contact'>Contact Us</Link>
                </li>
            </ul>

            {/* MOBILE BUTTON */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? (<AiOutLineClose size={20}/>) : (<AiOutlineMenu size={20}/>)}
            </div>

            {/*MOBILE MENU*/}
            <div 
                className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        }> 
            <ul>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/#team'>Our Team</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/award'>Awards</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href = '/contact'>Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar