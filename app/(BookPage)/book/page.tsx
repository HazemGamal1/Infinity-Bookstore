"use client";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { IoHeart } from "react-icons/io5";
import CardVariation from "@/app/components/CardVariation";
import { FaShoppingCart } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { StaticImageData } from "next/image";
import Footer from "@/app/components/Footer";
import Card from "@/app/components/Card";
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";

interface propTypes {
  params: { title: string; image: StaticImageData };
}
const Page = (props: propTypes) => {
  const [books, setBooks] = useState([
    {
      name: "Jujutsu kaisen ",
      image: "/bookCovers/king.webp",
      type: "novel",
      rating: 3.9,
      price: 200,
    },
    {
      name: "Menewood",
      image: "/menewood.webp",
      type: "novel",
      rating: 4.1,
      price: 200,
    },
    {
      name: "Cruel Price",
      image: "/menewood.webp",
      type: "novel",
      rating: 3.7,
      price: 200,
    },
    {
      name: "Iron Flame",
      image: "/ironFlame.jpg",
      type: "novel",
      rating: 4.3,
      price: 200,
    },
    {
      name: "Menewood",
      image: "/uglyLov.jpg",
      type: "novel",
      rating: 3.5,
      price: 200,
    },
    {
      name: "It Ends With Us",
      image: "/bookCovers/itEndsWithUs.jpg",
      type: "novel",
      rating: 3.5,
      price: 200,
    },
  ]);
  const [wishList, setWishList] = useState(false);
  return (
    <div className="relative h-full">
      <Navbar />
      <article className="lg:max-w-[80%] p-4 mx-auto mt-4 lg:flex lg:gap-4 lg:justify-center pt-12 h-full">
        <CardVariation />
        <div className="lg:w-[50%] flex flex-col justify-between">
          <div className="flex flex-col text-xl justify-between content-between">
            <h1 className="font-extrabold text-4xl lg:text-5xl ml-0 py-4 sm:py-0">
              The Wicked King
            </h1>

            <div className="sm:ml-2 mt-5">
              <p className="font-bold text-base max-w-max text-slate-950">
                After learning that Oak is the heir to Faerie, Jude must keep
                her younger brother safe. To do so, she has bound the wicked
                king, Cardan, to her, and made herself the power behind the
                throne. But he does everything in his power to humiliate and
                undermine her, even as his fascination with her remains
                undiminished. Someone close to Jude means to betray her,
                threatening her own life and the lives of everyone she loves.
                Now she must uncover the traitor and fight her own complicated
                feelings for Cardan, in order to maintain control as a mortal in
                a Faerie world. -- adapted from jacket
              </p>
            </div>
            <div className="sm:ml-2 my-4 flex flex-col gap-1">
              <p className="font-semibold text-gray-800 ">Price: £333</p>
              <div className="flex items-center gap-2 text-gray-800">
                <LiaShippingFastSolid size={30} />
                <p>Shipping in 3-5 working days.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex rounded-lg cursor-pointer bg-hover-color text-white hover:opacity-80 font-semibold py-2 justify-center gap-2 items-center w-3/4">
              <MdSell size={24} />
              <p className="text-lg">Buy Now</p>
            </div>
            <div className="flex rounded-lg cursor-pointer bg-slate-300 hover:opacity-80 font-semibold py-2 justify-center gap-2 items-center w-3/4">
              <FaShoppingCart size={24} />
              <p className="text-lg">Add To Cart</p>
            </div>
          </div>
        </div>
      </article>

      <div className="max-w-screen-2xl mx-auto">
        <h1 className="font-bold text-3xl m-6 text-center">Similar Books</h1>
        <div className="flex gap-6">
          <Link href="/book ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:max-w-screen-2xl p-4 mx-auto">
              {books ? (
                books.map((book) => {
                  return (
                    <Card
                      name={book.name}
                      image={book.image}
                      type={book.type}
                      price={book.price}
                      rating={book.rating}
                      key={book.name}
                    />
                  );
                })
              ) : (
                <div></div>
              )}
            </div>
          </Link>
        </div>
      </div>
      <Footer />
      {wishList && (
        <div className="py-4 px-3 fixed bottom-2 left-2 bg-white shadow-xl rounded-lg flex gap-2 h-max">
          <h1 className="bg-gradient-to-r to-rose-500 from-rose-600 font-bold bg-clip-text text-transparent">
            Item Added To Wishlist{" "}
          </h1>
          <IoHeart className="text-xl text-rose-500" />
        </div>
      )}
    </div>
  );
};

export default Page;

{
  /* <div
  className="bg-hover-color text-white rounded-2xl p-2 mt-4 flex items-center gap-2 cursor-pointer select-none max-w-max"
  onClick={() => setWishList(!wishList)}
>
  <IoHeart className={`text-xl ${wishList ? "text-rose-500" : null}`} />{" "}
  Wishlist
</div>; */
}
