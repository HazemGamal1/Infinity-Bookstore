"use client"
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {useState} from 'react';
import Link from 'next/link';
import logo from '@/app/logoBlack.png'
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const Navbar = () => {
    const [navVisible, setnavVisible] = useState(false);
  return (
    <div>
        <nav className={`w-full bg-white text-black p-2 lg:px-4 duration-100  border-b shadow-sm ${navVisible ? "transition-all border-b-2 border-slate-200" : ""}`}>
            <div className='flex items-center justify-between lg:max-w-screen-2xl mx-auto'>
                <Link href="/">
                    <div className='flex gap-1 items-center flex-shrink-0 hover:opacity-75 transition'>
                        <Image src={logo} alt="logo" width={50}/>
                        <p className='font-normal text-slate-400 text-lg cursor-pointer'>Infinity</p>
                    </div>
                </Link>
                <div className='hidden lg:flex gap-4 items-center'>
                    <div className='bg-main-color px-4 py-2 rounded-full hover:bg-black cursor-pointer duration-300 hover:first:text-white'>
                        <p className='font-extrabold'>OFFERS - Up To 30%</p>
                    </div>
                    <Link href="/login">
                        <div className='bg-black px-4 py-2 rounded-full hover:bg-hover-color cursor-pointer duration-300'>
                            <p className='font-extrabold text-white'>Sign In</p>
                        </div>
                    </Link>
                    <Link href="/browse">
                        <div className='hover:opacity-85 cursor-pointer'>
                                <h1 className=''>Browse All</h1>
                        </div>
                    </Link>
                    <IoCart className="text-3xl hover:text-hover-color duration-300 cursor-pointer"/>
                    <IoHeart className="text-3xl hover:text-rose-600 cursor-pointer"/>
                    <Link href="/dashboard"><FaRegEdit className="text-3xl cursor-pointer"/></Link>
                    {/* <p className='hover:opacity-80 cursor-pointer flex items-center gap-2'><FaSearch className="text-2xl cursor-pointer"/></p>  */}
                </div>
                <div onClick={() => setnavVisible(!navVisible)} className='block lg:hidden'>
                    {navVisible ?  < IoMdClose className="text-xl cursor-pointer" onClick={() => setnavVisible(!navVisible)}/> : <GiHamburgerMenu className="text-2xl cursor-pointer"/>}
                </div>
            </div>
        </nav>
        {navVisible && 
            <div className='absolute h-max z-10 flex flex-col w-full bg-white text-black p-4'>
                <div className=' sticky top-0 flex pt-2 bg-white flex-col gap-6 justify-center  h-max w-full'>
                    <Link href="/browse"><p className='hover:text-hover-color cursor-pointer'>Books</p></Link>
                    <p className='hover:text-hover-color cursor-pointer'>Offers</p>
                    <p className='hover:text-hover-color cursor-pointer'>New Arrivals</p>
                    <p className='hover:text-hover-color cursor-pointer'>Search</p> 
                    <Link href="/dashboard"><p className='hover:text-hover-color cursor-pointer'>Dashboard</p></Link>
                    <div className='flex justify-between mt-1 gap-2'>
                        <div className='w-[50%]'>
                            <Link href="/login">
                                <div className='flex rounded-lg cursor-pointer bg-slate-300 justify-center py-2 gap-2 items-center'>
                                    <IoPersonSharp className="text-xl"/>
                                    <p>Sign In</p>
                                </div>
                            </Link>
                        </div>
                        <div className='w-[50%]'>
                            <Link href="/sign-up">
                                <div className='flex rounded-lg cursor-pointer bg-slate-300 py-2  justify-center gap-2 items-center w-full'>
                                    <IoMdPersonAdd className="text-xl"/>
                                    <p>Sign Up</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Navbar
