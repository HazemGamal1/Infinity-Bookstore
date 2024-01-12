import React from 'react'
import logo from '@/app/logo black.png'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='grid w-screen h-screen place-content-center'>
      <Link href="/">
        <h1 className='font-bold text-2xl cursor-pointer absolute left-2 bottom-2'><Image src={logo} alt="logo" width={50}/></h1>
      </Link>
      <div className='shadow-2xl bg-[#FFF] pt-8 pb-6 px-8 relative rounded-2xl lg:w-[25vw] mx-2'>
        <div className='mb-6'>
            <div className='mb-4'>
                <h1 className='mb-2 font-bold text-sm lg:text-lg'>Username \ Account</h1>
                <input type="text" name="" id="" className='rounded-lg px-4 py-1 lg:py-2 w-full border-2 hover:shadow-xl focus:shadow-xl'/>
            </div>
            <div>
                <h1 className='mb-2 font-bold text-sm lg:text-lg'>Password</h1>
                <input type="password" name="" id="" className='rounded-lg px-4 py-1 lg:py-2 w-full border-2 hover:shadow-xl focus:shadow-xl'/>
            </div>
        </div>
        <div className='w-full'>
            <div className='mx-auto w-full text-center font-bold bg-black text-white hover:bg-hover-color duration-300 py-2 lg:py-2 rounded-lg cursor-pointer'>
                <h1 className='mx-auto text-sm lg:text-lg'>Sign In</h1>
            </div>
        </div>
        <div className='mt-6 text-sm lg:text-lg'>
          <p>Don't have an Account? <span className='cursor-pointer text-hover-color'><Link href="/sign-up">Sign Up</Link></span></p>
        </div>
      </div>
    </div>
  )
}

export default page
