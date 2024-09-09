import React, {useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const[logo,setLogo] = useState(false)
    const handleNav = () => {
        setNav (!nav)
        setLogo (!logo)
    }


  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className= {logo ? 'hidden' : 'block'}>BEACHES.</h1>
      </div>
      <ul className=' hidden md:flex'>
        <li> <a href="#">Home</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">View</a></li>
        <li><a href="#">Book</a></li>
      </ul>
      <div className=' hidden md:flex'>
        <BiSearch className='mr-4'  size={20}/>
        <BsPerson size={20}/>
        
      </div>
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
      </div>

      {/* Mobile Dropdown */}
      <div onClick={handleNav} className= {nav ? 'absolute top-0 w-full text-black h-1/3 px-4 py-5  flex flex-col left-0 ' : 'hidden'}>
        <ul>
        <h1>BEACHES.</h1>
        <li className='border-b border-black'>Home</li>
        <li className='border-b border-black'>Destinations</li>
        <li className='border-b border-black'>Travel</li>
        <li className='border-b border-black'>View</li>
        <li className='border-b border-black'>Book</li>
        <div className='flex flex-col gap-4 my-4'>
            <button>Search</button>
            <button>Account</button>
        </div>
        <div className='flex my-6 justify-between'>
        <FaFacebook className='icons'/>
        <FaTwitter className='icons'/>
        <FaInstagram className='icons'/>
        <FaPinterest className='icons'/>
        <FaYoutube className='icons'/>
        </div>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
