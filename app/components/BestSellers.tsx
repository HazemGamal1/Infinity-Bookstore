import React from 'react'
import Link from 'next/link';
import Card from '../components/Card';
import { useState } from 'react';
const BestSellers = () => {
  const[books, setBooks] = useState(
    [
      {
        name: "Jujutsu kaisen ",
        image: "/bookCovers/king.webp",
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
        image: "/menewood.webp",
        type: "novel",
        rating: 3.7,
        price: 200
      },
      {
        name: "Iron Flame",
        image: "/ironFlame.jpg",
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
        <div className='w-full lg:max-w-screen-2xl p-4 mx-auto'>
          <h1 className='font-bold mb-3 lg:text-3xl'>Best Sellers</h1>
        </div>
        <Link href="/book"><div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:max-w-screen-2xl p-4 mx-auto'>
          {books ?
          books.map((book) => {
            return <Card name={book.name} image={book.image} type={book.type} price={book.price} rating={book.rating} key={book.name}/>
          }): <div></div>}
        </div></Link>
    </div>
  )
}

export default BestSellers
