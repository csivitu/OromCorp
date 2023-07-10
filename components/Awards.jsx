import React from 'react'
import localFont from '@next/font/local'

const myFont = localFont({src: "../public/Canopee.woff2"})

const awards = () => {
  return (
    <div id = 'awards' className='bg-slate-100'>
      <h2 style = {myFont.style} className="text-4xl mb-4 text-center pt-9 pb-9">AWARDS</h2>

      <div>
        
      </div>

    </div>
  )
}

export default awards