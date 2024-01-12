import React from 'react'
import { FaInstagram, FaFacebook, FaXTwitter   } from "react-icons/fa6";
import Link from 'next/link';
const Footer = () => {
  return (
      <footer className='bg-white border-t-2 text-black pt-4 pb-2.5 text-center gap-2'>
        <div className='flex items-center justify-between max-w-screen-2xl mx-auto px-4'>
          <h1 className='mt-1 font-bold text-sm lg:text-2xl select-none'>Infinity. <span className='text-xs'>2024</span></h1>
          <div className='flex gap-4 px-2 '>
            <Link href="https://www.instagram.com/_infinity_books___/">
              <FaInstagram  className="footer-icon lg:text-2xl  hover:text-[#D300C5]"/>
            </Link>
            <FaFacebook className="footer-icon lg:text-2xl hover:text-blue-600"/>
            <FaXTwitter   className="footer-icon lg:text-2xl hover:text-blue-400"/>
          </div>
        </div>
      </footer>
  )
}

export default Footer
