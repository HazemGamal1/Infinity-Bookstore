"use client"
import Image from 'next/image'
import menewood from '@/app/menewood.webp';

import Verity from '@/app/verity.jpg';
import book from '@/app/uglyLov.jpg';

import { IoHeart } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { useState } from 'react';

interface PropTypes{
  picture: string
}
const Card = (props: PropTypes) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
        <div className='grid place-content-center relative rounded-lg cursor-pointer overflow-hidden ' onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <Image src={menewood} alt="book cover"  width={450} height={350} quality={100}/>
        </div>
    </div>
  )
}

export default Card
