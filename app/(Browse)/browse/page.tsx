"use client"
import React from 'react'
import Navbar from '../../components/Navbar'
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import FilterChoice from './components/FilterChoice';
import Card from '@/app/components/CardVariation';
import { GiSettingsKnobs } from "react-icons/gi";
import Footer from '@/app/components/Footer';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import menewood from '@/app/menewood.webp';
import king from '@/public/bookCovers/king.webp';
const Page = () => {
  const [showFilter , setShowFilter] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [showComics, setShowComics] = useState(false);
  return (
    <div>
      <Navbar />
      <div className='w-full px-1 2xl:px-0'>
        <div className='max-w-screen-2xl mx-auto my-6 '>
          <p className='flex gap-2'><span className='text-[#A4A4A4A4] flex gap-2 items-center cursor-pointer'>Home  <IoIosArrowForward /></span><span className='font-bold select-none'>Browse</span></p>
        </div>
        <div className='max-w-screen-2xl mx-auto my-6'>
          <div className='max-w-max ml-auto flex gap-6 items-center'>
            <p className='flex gap-2 items-center rounded-full border-2 p-2 cursor-pointer text-sm hover:text-hover-color duration-300' onClick={() => setShowFilter(!showFilter)}>Filter <GiSettingsKnobs  className="text-xl"/></p>
            <p className='flex gap-2 items-center rounded-full border-2 p-2 cursor-pointer text-sm'><span className='font-bold'>Sorting By </span> Newest <MdOutlineKeyboardArrowDown/></p>

          </div>
        </div>
        {/* Categories */}
          <div className='max-w-screen-2xl flex flex-col mx-auto py-2 px-4 2xl:px-0 2xl:flex-row gap-6'>
        {
          showFilter &&
            <div className='2xl:w-[25%] border-2 rounded-lg py-4 px-4 h-max'>
                <div className='flex w-full justify-between py-2'>
                  <p className='text-lg flex gap-2 items-center font-bold select-none '>Filter</p>
                  <p className='text-sm flex gap-2 items-center cursor-pointer  text-hover-color underline underline-offset-2'>Reset filter</p>
                </div>
                <div className='flex justify-between py-2'>
                  <p className='font-semibold flex justify-between items-center  w-full cursor-pointer hover:text-hover-color' onClick={()=> setShowCategories(!showCategories)}>Shop By Category {showCategories ? <FaMinus className="text-xl"/> : <IoMdAdd className="text-xl"/>}</p>
                </div>
                {
                  showCategories &&
                  <div className='flex flex-col gap-6 justify-between py-2 ml-2'>
                    <FilterChoice categoryName='Arts & Music'/>
                    <FilterChoice categoryName='Biographies'/>
                    <FilterChoice categoryName='Business'/>
                    <button onClick={() => setShowComics(!showComics)}><FilterChoice categoryName='Comics'/></button>
                    {
                      showComics && 
                        <div className='flex flex-col gap-4 ml-2'>
                          <a className='cursor-pointer'>Marvel Comics</a>
                          <a className='cursor-pointer'>DC Comics</a>
                        </div>
                    }
                    <FilterChoice categoryName='Manga'/>
                  </div>
                }
                {/* Prices */}
                <div>
                  <div className='mt-6'>
                    <p className='font-semibold mb-2'>Price</p>
                    <div className='relative w-full bg-black h-1 rounded-lg'>
                      <div className='absolute bg-hover-color w-6 h-1'>
                      </div>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                      <p>0 EGP</p>
                      <p>500 EGP</p>
                    </div>
                  </div>
                </div>
              </div>
              
        }
            <div className='2xl:w-full'>
              <div className='w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4'>
                {/* <Card params={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/>
                <Card picture={menewood}/> */}
              </div>
            </div>
          </div>

      </div>
      <Footer />
    </div>
  )
}

export default Page
