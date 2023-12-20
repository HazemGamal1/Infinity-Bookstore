"use client"
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoBook } from "react-icons/io5";

import {useState} from 'react';
export default function Home() {
  const [navVisible, setnavVisible] = useState(false);
  const [offerVisible, setOfferVisible] = useState(true);
  return (
    <div>
      { offerVisible && 
        <div className='w-full bg-[#FFFB1F] p-4'>
          <div className='flex justify-between text-black'>
            <div>

            </div>
            <div>
              <p>Buy 3 Books and get 1 free!</p>
            </div>
            <div>
              <IoMdClose className="text-xl" onClick={() => setOfferVisible(!offerVisible)}/>
            </div>
          </div>
        </div>
      }
      <nav className={`bg-white w-full text-black p-4 ${navVisible ? "bg-black text-white transition-all duration-300" : ""}`}>
        <div className='flex items-center justify-between lg:max-w-screen-2xl mx-auto'>
            <div>
              <h1 className='font-bold text-2xl'>Bookie</h1>
            </div>
            <div onClick={() => setnavVisible(!navVisible)}>
              <GiHamburgerMenu className="text-2xl cursor-pointer"/>
            </div>
        </div>
      </nav>
      {navVisible && 
        <div className='flex flex-col items-center w-full h-screen bg-black text-white p-4'>
          <div className='flex flex-col gap-6 text-center'>
            <p>Books</p>
            <p>$ Offers $</p>
            <p>New Arrivals</p>
            <p>Search</p>
          </div>
        </div>}
        <div className='h-screen'>
          <div className='hero w-full h-[60%] grid place-content-center text-center'>
            <h1 className='font-bold text-4xl mb-4'>Search</h1>
            <div className='mx-auto mb-4 flex items-center'>
              <input type="text" name="" id=""  className='h-full rounded-l-full text-black p-2' placeholder='Search....' />
              <div className='p-4 bg-[#FFFB1F] text-black rounded-r-full'>
                <FaSearch />
              </div>
            </div>
            <p className='text-xs'>We sell high quality books with a low price for you to learn & enjoy</p>
          </div>
          <div className='w-full flex flex-col justify-center items-center bg h-[20%]'>
            <p className='text-black bg-[#FFFB1F] px-2'>New Arrivals</p>
          </div>
        </div>
    </div>
  )
}
