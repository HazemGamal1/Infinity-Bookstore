import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/CardVariation'
const Page = () => {
  return (
    <div className='flex flex-col bg-slate-50 justify-between min-h-screen'>
        <div>
            <Navbar />
            <div className='flex gap-10 max-w-screen-2xl mx-auto w-full h-full my-4 min-h-max'>
                <div className='w-[70%]'>
                    <h1 className='text-2xl mb-12'>Order</h1>
                    <div className='w-full rounded-lg p-10 shadow-lg bg-[#FFF] min-h-max'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-4 items-center'>
                                    <div className='max-w-32'>
                                        <Card />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='font-bold text-xl'>The Wicked King</h1>
                                        <p>Holly Black</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <h3 className='text-xl text-hover-color font-bold'>50 EGP</h3>
                                    <div className='flex gap-2'>
                                        <p>Quantity</p>
                                        <input type="number" name="" id="" className='max-w-16 border-2 focus:border-2 text-hover-color pl-2 rounded-md'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] '>
                    <h1 className='text-2xl  mb-12'>Payment Summary</h1>
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
