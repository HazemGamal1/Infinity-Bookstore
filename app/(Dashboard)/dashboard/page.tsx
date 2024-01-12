"use client"
import Navbar from '@/app/components/Navbar'
import axios from 'axios';
import React , {ChangeEvent, FormEvent, useState, useEffect} from 'react'
import Card from '@/app/components/Card'
import Offer from '@/app/components/Offer'
import { IoHeart } from "react-icons/io5";
import CardVariation from '@/app/components/CardVariation';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Footer from '@/app/components/Footer';
import { MdSell } from "react-icons/md";
import err from '/404.png'
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
const page = () => {
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
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
        setError('');
      } catch (error) {
        setError('Error fetching data');
        setData(null);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {error && (
        <div className='w-full h-full grid place-content-center text-center pt-24'>
          <img src="/404.png" alt="" className='w-[200px] lg:w-[500px] mx-auto'/>
          <h1 className='text-3xl'>{error}</h1>
          <h3>Something went wrong</h3>
        </div>
      )}
      {data && (
        <div>
          <div className='lg:max-w-[50%] p-4 mx-auto mt-4 lg:flex flex-col lg:gap-4 lg:justify-center overflow-hidden'>
            <button className='mx-auto w-full text-center font-bold bg-black text-white hover:bg-hover-color py-2 px-2 rounded-lg mb-8' onClick={() => setShow(!show)}>{show ? "Hide Data" : "Show All API Data"}</button>
            {show &&
                <pre>{JSON.stringify(data, null,2)}</pre>
            }
          </div>
            <AddBook />
            <RemoveBook />
        </div>
      )}
    </div>
  )
}

export default page
