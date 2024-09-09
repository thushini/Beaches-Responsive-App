import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video  className='w-full h-full object-cover'
       src={beachVid} 
       autoPlay 
       loop 
       muted
       />
       <div className=' absolute w-full h-full top-0 left-0 bg-gray-900/75'></div>
       <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-6'>
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className='flex justify-between items-center border max-w-[700px] w-full mx-auto p-1 rounded-md text-black
        bg-gray-100/90 mt-2'>
            <div className='text-black'>
                <input className='focus:outline-none bg-transparent w-[300px] sm:w-[400px] font-[poppins]' type="text" placeholder='Search Destiation'/>
            </div>
            <div>
                <button><AiOutlineSearch size={20} className='icon'/></button>
            </div>
        </form>
       </div>
    </div>
  )
}

export default Hero
