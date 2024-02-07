'use client'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import { IoHeart } from "react-icons/io5";
import CardVariation from '@/app/components/CardVariation';
import { FaShoppingCart } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { StaticImageData } from 'next/image';

interface propTypes{
    params: {title: string, image: StaticImageData}
}
const Page = (props : propTypes) => {
    const[wishList, setWishList] = useState(false);
  return (
    <div className='relative h-full'>
        <Navbar />
            <div className='lg:max-w-[50%] p-4 mx-auto mt-4 lg:flex lg:gap-4 lg:justify-center pt-12 h-full'>
                <CardVariation/>
                <div className='lg:w-[50%] flex flex-col justify-between'>
                    <div>
                        <div className='bg-hover-color text-white rounded-2xl p-2 mt-4 flex items-center gap-2 cursor-pointer select-none max-w-max' onClick={() => setWishList(!wishList)}>
                            <IoHeart className={`text-xl ${wishList ? "text-rose-500" : null}`}/> Wishlist
                        </div>
                        <h1 className='mt-4 font-extrabold text-4xl lg:text-6xl'>The Wicked King</h1>
                        <p className='bg-main-color mt-4 font-bold rounded-md text-sm max-w-max py-1 px-2'>Novel</p>
                        <p className='mt-4 font-bold rounded-md text-sm max-w-max py-1 text-slate-500'>Fiction/Historic</p>
                        <p className='mt-4 font-bold rounded-md text-lg max-w-max py-1 text-slate-700'>
After learning that Oak is the heir to Faerie, Jude must keep her younger brother safe. To do so, she has bound the wicked king, Cardan, to her, and made herself the power behind the throne. But he does everything in his power to humiliate and undermine her, even as his fascination with her remains undiminished. Someone close to Jude means to betray her, threatening her own life and the lives of everyone she loves. Now she must uncover the traitor and fight her own complicated feelings for Cardan, in order to maintain control as a mortal in a Faerie world. -- adapted from jacket</p>
                    </div>
                    <div className='flex justify-between mt-8 gap-2 '>
                        <div className='flex rounded-lg cursor-pointer hover:opacity-80 bg-slate-300 justify-center py-2 gap-2 items-center w-full'>
                            <MdSell className="text-lg " />
                            <p>Buy</p>
                        </div>
                        <div className='flex rounded-lg cursor-pointer hover:opacity-80 bg-slate-300 py-2  justify-center gap-2 items-center w-full'>
                            <FaShoppingCart className="flex-shrink-0" />
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            {wishList && (
                <div className='py-4 px-3 fixed bottom-2 left-2 bg-white shadow-xl rounded-lg flex gap-2 h-max'>
                    <h1 className='bg-gradient-to-r to-rose-500 from-rose-600 font-bold bg-clip-text text-transparent'>Item Added To Wishlist </h1>
                    <IoHeart className="text-xl text-rose-500"/>
                </div>
            )}
    </div>
  )
}

export default Page
