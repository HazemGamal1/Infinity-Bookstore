"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

const RemoveBook = () => {
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
    <div className='lg:max-w-[50%] p-4 mx-auto mt-4 lg:flex flex-col lg:gap-4 lg:justify-center overflow-hidden'>
        <button className='mx-auto w-full text-center font-bold bg-black text-white hover:bg-hover-color py-2 px-2 rounded-lg mb-8' onClick={() => setShow(!show)}>{show ? "Close" : "Remove Book"}</button>
        {show &&
            <div className='w-full grid '>
                    <form action="" className='flex  min-w-full flex-col gap-4'>
                        <label htmlFor="id">Book ID: </label>
                        <input type="text" name="id" id="id"  className='border-2 px-4 py-1 focus:shadow-md w-full'/>
                    </form>
            </div>
        }
    </div>
  )
}

export default RemoveBook
