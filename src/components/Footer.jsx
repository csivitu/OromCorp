import React from 'react'
import Marquee from 'react-fast-marquee'
import localFont from '@next/font/local'

const myFont = localFont({src: "../public/fonts/Crima.otf"})

const Footer = () => {
  return (
    <div style={myFont.style} className='bg-[#D9D9D9] w-full text-[#172241] absolute bottom-0'>
    <Marquee className='h-10 overflow-y-hidden'>
        <div className='p-5'>
        <span className='mr-10 ml-10 text-2xl'>
        •  your tagline goes here  •
        </span>
        <span className='mr-10 ml-10 text-2xl'>
        •  your tagline goes here  •
        </span>
        <span className='mr-10 ml-10 text-2xl'>
        •  your tagline goes here  •
        </span>
        <span className='mr-10 ml-10 text-2xl'>
        •  your tagline goes here  •
        </span>
        <span className='mr-10 ml-10 text-2xl'>
        •  your tagline goes here  •
        </span>
        </div>
    </Marquee>
    </div>
  )
}

export default Footer