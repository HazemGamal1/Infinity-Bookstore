"use client"
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import theCruelPrince from '@/app/the-cruel-prince.jpg';
import menewood from '@/app/menewood.webp';
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
      <nav className={`bg-white w-full text-black p-4 ${navVisible ? "transition-all duration-300" : ""}`}>
        <div className='flex items-center justify-between lg:max-w-screen-2xl mx-auto'>
            <div>
              <h1 className='font-bold text-2xl'>Bookie</h1>
            </div>
            <div onClick={() => setnavVisible(!navVisible)}>
              {navVisible ?  <IoMdClose className="text-xl" /> : <GiHamburgerMenu className="text-2xl cursor-pointer"/>}

            </div>
        </div>
      </nav>
      {navVisible && 
        <div className='z-10 flex flex-col items-center w-full h-screen bg-black text-white p-4 absolute'>
          <div className='flex bg-black flex-col gap-6 text-center justify-center items-center h-screen w-full'>
            <p className='hover:text-[#FFFB1F] cursor-pointer'>Books</p>
            <p className='hover:text-[#FFFB1F] cursor-pointer'>Offers</p>
            <p className='hover:text-[#FFFB1F] cursor-pointer'>New Arrivals</p>
            <p className='hover:text-[#FFFB1F] cursor-pointer'>Search</p>
          </div>
        </div>
      }
        <div className='h-screen flex flex-col justify-between'>
          <div className='hero w-full h-full grid place-content-center text-center'>
            <h1 className='font-bold text-4xl mb-4 drop-shadow-md text-white'>Search</h1>
            <div className='mx-auto mb-4 flex items-center drop-shadow-lg shadow-2xl'>
              <input type="text" name="" id=""  className='h-full rounded-l-full text-black text-xs p-3' placeholder='Search....' />
              <div className='p-4 bg-[#FFFB1F] text-black rounded-r-full'>
                <FaSearch />
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center bg h-[20%]'>
            <p className='text-black bg-[#FFFB1F] px-2 shadow-2xl shadow-slate-200 '>New Arrivals</p>
          </div>
        </div>
        <div>
          <div className='w-full text-center p-4'>
            <h1 className='font-bold'>Best Sellers</h1>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:max-w-screen-2xl p-4 mx-auto items-center justify-center'>
            <div className='card'>
                <Image src={theCruelPrince} alt="book cover"  width={0} height={0} style={{width: '100%', height: 'auto'}}/>
                <div>
                <p className='font-extrabold text-sm'>The Cruel Prince</p>
                <p className='text-[#FFFB1F] author text-xs mb-2'>By: Holly Black</p>
                <p className='text-sm'>200 EGP</p>
              </div>
            </div>
            <div className='card'>
              <Image src={menewood} alt="book cover"  width={0} height={0} style={{width: '100%', height: 'auto'}}/>
              <div>
                <p className='font-extrabold'>Menewood</p>
                <p className='text-[#FFFB1F] author text-xs mb-2'>By: Nicola Griffith</p>
                <p className='text-sm'>200 EGP</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
