import React from 'react'
import Marquee from 'react-fast-marquee'

const Footer = () => {
  return (
    <div className='bg-gray-300 fixed bottom-0 left-0 right-0'>
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