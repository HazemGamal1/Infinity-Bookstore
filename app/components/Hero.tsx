"use client"
import React, { FormEvent } from 'react'
import { useState } from 'react';
import logotext from '@/public/hero.png'
import Image from "next/image";
import { FaSearch } from 'react-icons/fa';
import { ChangeEvent } from 'react';
import axios from 'axios';
import Book from './Book';
import {redirect} from 'next/navigation'
const Hero = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState(null); 
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://localhost:7266/api/Book/title/${inputValue}`);
      setData(response.data);
      setTitle(response.data.title)
      setImage(response.data.picture)
      console.log(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching data');
      setData(null);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetchData();
  };

  return (
    <div className='h-[70vh] flex flex-col text-white'>
          <div className='hero w-full h-full flex flex-col justify-center'>
            <div className="w-full grid place-content-center">
              <h1 className='font-bold text-3xl drop-shadow-md text-white md:text-4xl lg:text-7xl select-none uppercase mb-6 opacity-95'><Image src={logotext} alt='logo' width={500}/></h1>
            </div>
            <div className='max-w-screen-2xl mx-auto relative flex items-center bg-white rounded-full'>
                <input type="text" name="" 
                      id=""  
                      className='rounded-full text-black text-lg p-3 px-6 lg:text-2xl' 
                      placeholder='Search....'
                      value={inputValue}
                      onChange={handleChange}
                      onKeyDown={(e) => {if(e.key == "Enter") fetchData();}}
                />
                <div className='p-3 text-slate-400 rounded-r-full lg:p-5 absolute right-1 cursor-pointer' onClick={() => {fetchData()}}>
                  <FaSearch className="text-md"/>
                </div>
            </div> 
            <div className='pt-8'>
            {data && 
                  redirect('/book')
              }
             {error && (
              <div className='text-center'>
                <p>Not Found</p>
              </div>
             )}
            </div>
          </div>
    </div>
  )
}

export default Hero
