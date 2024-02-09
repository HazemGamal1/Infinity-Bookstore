import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/CardVariation'
const Page = () => {
  return (
    <div className='flex flex-col bg-slate-50 justify-between min-h-screen'>
        <div>
            <Navbar />
            <div className='flex flex-col lg:flex-row gap-10 max-w-screen-2xl mx-auto w-full h-full my-4 min-h-max'>
                <div className='w-full lg:w-[70%]'>
                    <h1 className='text-xl mb-12 px-4 2xl:px-0'>Order</h1>
                    <div className='w-full rounded-lg p-10 shadow-lg bg-[#FFF]'>
                        <div className='flex flex-col flr gap-2'>
                            <div className='flex flex-col 2xl:flex-row justify-between items-center'>
                                <div className='flex flex-col 2xl:flex-row gap-4 items-center justify-center text-center 2xl:text-left'>
                                    <div className='max-w-32'>
                                        <Card />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='font-bold 2xl:text-xl text-sm'>The Wicked King</h1>
                                        <p className='text-xs'>Holly Black</p>
                                    </div>
                                </div>
                                <div className='flex flex-col 2xl:flex-row gap-5 text-center'>
                                    <h3 className='text-sm 2xl:text-xl text-hover-color font-bold'>50 EGP</h3>
                                    <div className='flex flex-col 2xl:flex-row gap-2 items-center text-center'>
                                        <p className='text-sm'>Quantity</p>
                                        <input type="number" name="" id="" className='max-w-16 border-2 focus:border-2 text-hover-color pl-2 rounded-md'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] '>
                    <h1 className='text-xl  mb-12 px-4 2xl:px-0'>Payment Summary</h1>
                    <div className='w-full rounded-lg p-20 shadow-lg bg-[#FFF]'>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Page
