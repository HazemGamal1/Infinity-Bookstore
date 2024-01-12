"use client"
import { IoMdClose } from "react-icons/io";
import {useState} from 'react';


const Offer = () => {
const [offerVisible, setOfferVisible] = useState(true);
  return (
    <div>
      { offerVisible && 
        <div className='bg-[#DE1800] px-2 py-2'>
          <div className='flex justify-between text-white 2xl:max-w-screen-2xl mx-auto items-center'>
            <div>
              <p className="text-2xl select-none">🌟</p>
            </div>
            <div>
              <p className="border-b-2  cursor-pointer">Christmas Offers 🎄</p>
            </div>
            <div>
              <IoMdClose className="text-xl cursor-pointer" onClick={() => setOfferVisible(!offerVisible)}/>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Offer
