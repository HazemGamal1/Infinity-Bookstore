import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { IoHeart } from "react-icons/io5";
import CardVariation from '@/app/components/CardVariation';
import { FaShoppingCart } from "react-icons/fa";
import { MdSell } from "react-icons/md";

const FourthWing = () => {
    const [data, setData] = useState(null);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7266/api/Book");
        setData(response.data);
        setAuthor(response.data[0].author);
        setTitle(response.data[0].title);
        setPrice(response.data[0].price);
        setPicture(response.data[0].picture);
        setError('');
      } catch (error) {
        setError('Error fetching data');
        setData(null);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='lg:max-w-[50%] p-4 mx-auto mt-4 lg:flex lg:gap-4 lg:justify-center'>
        <CardVariation picture={picture}/>
        <div className='lg:w-[50%] flex flex-col justify-between'>
            <div>
                <div className='bg-hover-color text-white rounded-2xl p-2 mt-4 flex items-center gap-2 cursor-pointer select-none max-w-max'>
                    <IoHeart /> Wishlist
                </div>
                <h1 className='mt-4 font-extrabold text-4xl lg:text-6xl'>{title}</h1>
                <p className='mt-2 font-normal text-lg lg:text-xl'>{author}</p>
                <p className='bg-main-color mt-4 font-bold rounded-md text-sm max-w-max py-1 px-2'>Novel</p>
                <p className='mt-4 font-bold rounded-md text-sm max-w-max py-1 text-slate-500'>Fiction/Historic</p>
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
  )
}

export default FourthWing
