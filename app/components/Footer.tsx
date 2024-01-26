import React from 'react'
import { FaInstagram, FaFacebook, FaXTwitter   } from "react-icons/fa6";
import Link from 'next/link';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
  return (
      <footer className='bg-[#000] border-t-2 text-white pt-4 pb-2.5 gap-2'>
        <div className='flex items-center justify-between max-w-screen-2xl mx-auto px-4'>
          <div>
            <h1 className='mt-1 font-bold text-sm lg:text-2xl select-none'>Infinity. <span className='text-xs'>2024</span></h1>
            <p className='text-[#A4A4A4A4] max-w-[20rem] my-2'>An online store dedicated to deliver books to you with the best quality</p>
            <div className='flex gap-4 mt-8 mb-2'>
              <Link href="https://www.instagram.com/_infinity_books___/">
                <FaInstagram  className="footer-icon lg:text-2xl  hover:text-[#D300C5]"/>
              </Link>
              <FaFacebook className="footer-icon lg:text-2xl hover:text-blue-600"/>
              <FaXTwitter   className="footer-icon lg:text-2xl hover:text-blue-400"/>
            </div>
          </div>
          <div>
            <h1 className='mt-1 font-bold text-sm lg:text-2xl select-none'>Contact Us</h1>
            <div className='flex flex-col gap-4 mt-8 mb-2'>
              <div className='flex gap-4 items-center'>
                <FaPhoneVolume className="text-xl"/> <span className='text-[#A4A4A4A4] font-semibold text-lg'>+201027290839</span>
              </div>
              <div className='flex gap-4 items-center'>
                <IoMdMail className="text-xl"/> <span className='text-[#A4A4A4A4] font-semibold text-lg'>hazemgamaltaha3@gmail.com</span>
              </div>

            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
