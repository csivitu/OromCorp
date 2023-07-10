import React from 'react'
import localFont from '@next/font/local'
import Image from 'next/image'
import awardsImage from '../public/images/awards.jpg'

const myFont = localFont({src: "../public/fonts/Crima.otf"})
const myFont2 = localFont({src: "../public/fonts/Inter-Light-BETA.ttf"})

const awards = () => {
  return (
    <div id = 'awards' className='content-center justify-center bg-[#172241] text-white'>

      <div>
        <div>
          <h2 style = {myFont.style} className="text-4xl mb-4 text-center py-6">Awards</h2>
        </div>

        <div className='relative flex content-center justify-center'>
          <Image
            src={awardsImage}
            className='w-3/4 h-72'
          />
        </div>
      </div>

      <div style = {myFont2.style} className='flex flex-col text-center justify-center'>
        <h5 className='p-6 pb-1 pt-11 text-4xl flex flex-col'>YOUR TESTIMONIALS GO HERE</h5>
        <p className='py-1 text-2xl flex-col'>"slideshow"</p>
      </div>

    </div>
  )
}

export default awards