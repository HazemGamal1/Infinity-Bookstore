import React from 'react'
import Navbar from '../components/Navbar'

const Page = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Navbar />
        <div className='flex max-w-screen-2xl mx-auto w-full h-full'>
            <div className='w-[70%]'>
                something
            </div>
            <div className='w-[30%] bg-black text-white'>
                something
            </div>
        </div>
    </div>
  )
}

export default Page
