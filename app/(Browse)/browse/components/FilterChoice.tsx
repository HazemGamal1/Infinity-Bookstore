import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

interface IProps {
    categoryName: string
}
const FilterChoice = (props : IProps) => {
  return (
    <div className='flex justify-between border-b-2 border-[#7f7f7f0e] py-2 cursor-pointer hover:text-hover-color'>
        <p className='select-none'>{props.categoryName}</p>
        <IoIosArrowForward/>
    </div>
  )
}

export default FilterChoice
