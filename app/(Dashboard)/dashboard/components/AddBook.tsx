"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { ChangeEvent } from 'react';
const AddBook = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [author, setAuthor] = useState("");
    const [picture, setPicture] = useState("");
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      try{
        const submit = await axios.post('https://localhost:7266/api/Book/', {
          title: title,
          author: author,
          price: price,
          image: picture
        })
        
        if (submit.status >= 200 && submit.status < 300) {
          setResponseMessage('Data posted successfully');
          setError('');
        } else {
          throw new Error('Failed to post data');
        }
      }catch (error :any) {
        setError('Error posting data' + error.Message);
        setResponseMessage('');
        console.log(title);
        console.log(author);
        console.log(price);
        console.log(picture);
      }
    }
  return (
    <div className='lg:max-w-[50%] p-4 mx-auto mt-4 lg:flex flex-col lg:gap-4 lg:justify-center overflow-hidden'>
        <button className={`mx-auto w-full text-center font-bold bg-black text-white py-2 px-2 rounded-lg mb-8 ${show  && "bg-red-500"}`} onClick={() => setShow(!show)}>{show ? "Close" : "Add Book"}</button>
        {show &&
            <div className='w-full flex flex-col gap-8'>
                    <form action="" className='flex  min-w-full flex-col gap-4' onSubmit={handleSubmit}>
                        <label htmlFor="title">Book Title: </label>
                        <input type="text" name="title" id="title"  className='border-2 px-4 py-1 focus:shadow-md w-full' onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="author">Book Author: </label>
                        <input type="text" name="Author" id="author"  className='border-2 px-4 py-1 focus:shadow-md w-full' onChange={(e) => setAuthor(e.target.value)}/>
                        <label htmlFor="Category">Book Category: </label>
                        <input type="text" name="Category" id="Category"  className='border-2 px-4 py-1 focus:shadow-md w-full' />
                        <label htmlFor="description">Book Description: </label>
                        <textarea name="title" id="description"  className='border-2 px-4 py-1 focus:shadow-md'/>
                        <label htmlFor="rating">Book Rating: </label>
                        <input type="number" name="rating" id="rating"  min="1" max="5" step={0.1} className='border-2 px-4 py-1 focus:shadow-md'/>
                        <label htmlFor="price">Book Price: </label>
                        <input type="number" name="price" id="price"  min="1" max="1000" step={100} className='border-2 px-4 py-1 focus:shadow-md'  onChange={(e) => setPrice(+e.target.value)}/>
                        <label htmlFor="text">Book Cover URL: </label>
                        <input type="text" name="cover" id="text" className='border-2 px-4 py-1 focus:shadow-md' onChange={(e) => setPicture(e.target.value)}/>
                        <button type="submit" className='bg-black hover:bg-hover-color max-w-max text-white font-bold py-2 px-4 mx-auto rounded-lg'>Submit All</button>
                    </form>
                    {responseMessage && <p>{responseMessage}</p>}
                    {error && <p>{error}</p>}
            </div>
        }
    </div>
  )
}

export default AddBook
