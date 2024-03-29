import React from 'react'
import logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
const Page = () => {
  return (
    <div>
      <Navbar />
      <div className='grid  h-screen  place-content-center bg-slate-100'>
          {/* <Link href="/">
              <div className='font-bold text-2xl cursor-pointer absolute left-2 bottom-2'><Image src={logo} alt="logo" width={50}/></div>
          </Link> */}
          <div className='shadow-2xl bg-[#FFF] pt-8 pb-6 px-8 relative rounded-2xl lg:w-[25vw] mx-2'>
            <div className='mb-6'>
                <div className='mb-4'>
                    <h1 className='mb-2 font-bold text-sm lg:text-lg'>Username \ Account</h1>
                    <input type="text" name="" id="" className='rounded-lg px-4 py-1 lg:py-2 w-full border-2 focus:shadow-xl focus:border-2'/>
                </div>
            <div className='mb-4'>
                <div>
                    <h1 className='mb-4 font-bold text-sm lg:text-lg'>Password</h1>
                    <input type="password" name="" id="" className='rounded-lg px-4 py-1 lg:py-2 w-full border-2 focus:shadow-xl focus:border-2'/>
                </div>
                <div className='mx-auto w-full text-center font-bold mt-6 bg-black text-white hover:bg-hover-color duration-300 py-2 lg:py-2 rounded-lg cursor-pointer'>
                    <h1 className='mx-auto text-sm lg:text-lg'>Sign In</h1>
                </div>
            </div>
            <div className='mt-6 text-sm lg:text-lg'>
              <p>New to Infinity Books? <Link href="/sign-up"><span className='cursor-pointer text-hover-color'>Sign Up</span></Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page
