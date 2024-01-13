import React from 'react'
import Navbar from '../../components/Navbar'
import { FaFilter } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full'>
        <div className='max-w-screen-2xl mx-auto py-4 border-b-2 px-4 2xl:px-0'>
          <div>
            <p className='text-lg flex gap-2 items-center cursor-pointer'><FaFilter className="text-lg"/>Filter</p>
          </div>
        </div>
        <div className='grid place-content-center h-screen w-full'>
          <h1 className='font-bold'>Books grid</h1>
        </div>

      </div>
    </div>
  )
}

export default page
