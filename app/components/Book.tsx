'use client'
import { FaCheck } from "react-icons/fa";
import React, { useState } from 'react'
interface PropTypes{
    title: string,
    image: string,
}
const Book = (props:PropTypes) => {
    const[wishList, setWishList] = useState(false);
  return (
    <div>
            <div className='lg:max-w-[50%] mx-auto mt-4 lg:mt-0 lg:flex flex-col lg:gap-4 lg:justify-center'>
                <div className="w-full">
                  <img src={`${props.image}`} alt="book cover" width={120} className=" mx-auto"/>
                </div>
                <div className="flex bg-green-600 w-max mx-auto py-2 px-4 rounded-lg items-center gap-2">
                    <h1 className='text-md lg:text-2xl font-extrabold'>{props.title} is available </h1>
                    <FaCheck className="text-md lg:text-2xl"/>
                </div>
             </div>
    </div>
  )
}

export default Book
