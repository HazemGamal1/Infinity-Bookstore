import React from 'react'
import Link from 'next/link';
import Card from '../components/Card';
import { useState } from 'react';
import image from '@/public/jujutsu.jpg'
const BestSellers = () => {
  const[books, setBooks] = useState(
    [
      {
        name: "Jujutsu kaisen ",
        image: "/jujutsu.jpg",
        type: "novel",
        rating: 3.9,
        price: 200
      },
      {
        name: "Menewood",
        image: "/menewood.webp",
        type: "novel",
        rating: 4.1,
        price: 200
      },
      {
        name: "Cruel Price",
        image: "/the-cruel-prince.jpg",
        type: "novel",
        rating: 3.7,
        price: 200
      },
      {
        name: "Menewood",
        image: "/verity.jpg",
        type: "novel",
        rating: 4.3,
        price: 200
      },
      {
        name: "Menewood",
        image: "/uglyLov.jpg",
        type: "novel",
        rating: 3.5,
        price: 200
      },
      {
        name: "It Ends With Us",
        image: "/bookCovers/itEndsWithUs.jpg",
        type: "novel",
        rating: 3.5,
        price: 200
      },
    ]
  )
  return (
    <div>
        <div className='w-full text-center bg-slate-100'>
        <h1 className='font-bold mb-3 lg:text-3xl'>Best Sellers</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:max-w-screen-2xl p-4 mx-auto'>
          {books ?
          books.map((book) => {
            return <Card name={book.name} image={book.image} type={book.type} price={book.price} rating={book.rating}/>
          }): <div></div>}
        </div>
    </div>
  )
}

export default BestSellers
