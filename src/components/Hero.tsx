import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
      <div className='hero flex items-center justify-center flex-col text-white gap-2 py-20 shadow-2xl'>
          <h1 className='text-4xl font-extrabold'>Welcome to Solid Rock Sanctuary</h1>
          <span className='font-bold'>Experience the love, faith, and community in christ</span>
          <h3 className='text-violet-300 flex flex-col gap-1'>
              <span className='font-bold mr-1'>My year of</span>
              <span className='bg-violet-400 text-white p-1 rounded w-fit font-extrabold text-xl'> RAISING THE </span>
              <span className='bg-violet-400 text-white p-1 rounded w-fit font-extrabold text-xl'>FOUNDATIONS </span>
              <span className='bg-violet-400 text-white p-1 rounded w-fit font-extrabold text-xl'>OF MANY GENERATIONS</span></h3>
          <span className='text-violet-200 font-bold mt-10'>ISAIAH 58:12</span>
          <button className='font-bold px-10 py-1 rounded bg-violet-300'>Join Us</button>
          <div className='w-56 h-56 absolute top-[10%] right-[5%]'><img src="/logo.jpeg" alt="" className='w-full h-full mix-blend-lighten'/></div>
    </div>
  )
}

export default Hero