"use client"
import Image from 'next/image'
import menewood from '@/app/menewood.webp';
import { StaticImageData } from 'next/image';
import Verity from '@/app/verity.jpg';
import { useState } from 'react';
import king from '@/public/bookCovers/king.webp';


const Card = () => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
        <div className='grid place-content-center relative rounded-lg cursor-pointer overflow-hidden ' onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <Image src={king} alt="book cover"  width={450} height={350} quality={100} layout='fit'/>
        </div>
    </div>
  )
}

export default Card
