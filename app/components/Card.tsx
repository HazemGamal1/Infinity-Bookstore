"use client"
import Image from 'next/image'
import { IoHeart } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useState } from 'react';

interface propTypes{
  name: string,
  image:string,
  type: string,
  rating: number,
  price: number
}
const Card = (props :propTypes) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div className='card'>
        <div className='grid place-content-center relative rounded-lg overflow-hidden max-h-[15rem] md:max-h-[20rem] lg:max-h-[22rem]' onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <Image src={`${props.image}`} alt="book cover" className=' h-auto w-[100%]' width={450} height={350}/>
            <div className='absolute top-1 left-0.5 text-[#000] p-[3px] px-[5px] rounded-xl font-bold text-[10px] bg-white z-10 lg:text-lg'><p>🔥 Best Seller</p></div>
            <div className='absolute top-1 right-1 text-white p-[5px] px-[5px] rounded-xl font-bold text-[12px] bg-black z-10 lg:text-lg hover:bg-hover-color'><IoHeart/></div>
            <div className='absolute bottom-1 left-0.5 text-black p-[2px] px-[5px] rounded-xl font-bold text-[12px] bg-white z-10 flex gap-2 items-center lg:text-lg'><FaStar className="text-yellow-300"/> {props.rating}</div>
            <div className='absolute bottom-1 right-0.5 text-[#000] p-[5px] px-[5px] rounded-xl font-bold text-[16px] bg-white z-10 shadow-2xl flex gap-2 items-center lg:text-lg'><IoCart/></div>
        </div> 
    </div>
  )
}

export default Card
