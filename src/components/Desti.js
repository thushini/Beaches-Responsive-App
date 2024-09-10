import React from 'react'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import keywest from '../assets/keywest.jpg'

const Desti = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches</p>
        <div className='grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4'>
            <img className='object-cover w-full h-full col-span-2 row-span-2 md:col-span-3' src={borabora} alt="" />
            <img className='object-cover w-full h-full'src={borabora2} alt="" />
            <img className='object-cover w-full h-full'src={maldives} alt="" />
            <img className='object-cover w-full h-full'src={maldives2} alt="" />
            <img className='object-cover w-full h-full'src={keywest} alt="" />

        </div>
      
    </div>
  )
}

export default Desti
