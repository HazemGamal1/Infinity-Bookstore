"use client"
import Image from 'next/image'
import menewood from '@/app/menewood.webp';
import { StaticImageData } from 'next/image';
import Verity from '@/app/verity.jpg';
import { useState } from 'react';

interface PropTypes{
  params: {picture?: any};
  
}
const Card = (props: PropTypes) => {
    const [showInfo, setShowInfo] = useState(false);
    let image = props.params.picture as any;
  return (
    <div>
        <div className='grid place-content-center relative rounded-lg cursor-pointer overflow-hidden ' onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <Image src={image} alt="book cover"  width={450} height={350} quality={100}/>
        </div>
    </div>
  )
}

export default Card
