import React from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'

const Sea = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='flex flex-col lg:col-span-2 justify-evenly'>
        <div>
          <h2>LUXURY INCLUDE VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora reiciendis facilis cum voluptatem quo nostrum provident at incidunt eligendi odit id atque nesciunt iure expedita esse voluptatibus, error similique numquam, nisi quae! Voluptatem sit consequatur sint tempora beatae voluptates suscipit? A, ut. Pariatur, corporis quibusdam.
          dolor sit amet consectetur adipisicing elit. Tempora reiciendis facilis
          </p>
        </div>
        <div className='grid gap-8 py-4 sm:grid-cols-2'>
          <div className='flex flex-col items-center text-center lg:flex-row'> 
            <button> <RiCustomerService2Fill size={50}/></button>
            <div>
              <h3 className='py-3'>LEADING SERVICE</h3>
              <p className='py-1'>ALL_ INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col items-center text-center lg:flex-row'> 
            <button> <MdOutlineTravelExplore size={50}/></button>
            <div>
              <h3 className='py-3'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>

        </div>
  
      </div>
      <div>
        <div className='text-center border'>
        <p>GET ALL ADDITIONAL IN 10% OFF</p>
        <p className='py-4'>12 HOURS LEFT</p>
        <p className='py-2 mb-2 text-gray-200 bg-gray-800'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full '>
          <div className='flex flex-col my-3'>
            <label>Destination</label>
            <select  className='p-2 border rounded-md'>
              <option>Grande Antigua</option>
              <option>key west</option>
              <option>maldives</option>
              <option>Grande Antigua</option>
            </select>
          </div>
          <div className='flex flex-col my-3'>
           <label>Chech-in</label>
           <input className='p-2 border rounded-md' type='date'/>
          </div>
          <div className='flex flex-col my-3'>
          <label>Chech-Out</label>
          <input className='p-2 border rounded-md' type='date'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sea
