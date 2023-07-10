import React from 'react'
import Marquee from 'react-fast-marquee'
import localFont from '@next/font/local'

const myFont = localFont({src: "../public/Crima.otf"})

const Footer = () => {
  return (
    <div style={myFont.style} className='bg-[#D9D9D9] fixed bottom-0 left-0 right-0 text-[#172241]'>
    <Marquee>
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