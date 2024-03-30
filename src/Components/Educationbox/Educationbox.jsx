import React from 'react'

const Educationbox = ({startingYear, endingYear, name, location, subject}) => {
  return (
    <div className='bg-[#F3F6F6] p-[20px] rounded-xl w-full'>
      <h1 className='text-[14px] leading-[14px] font-[400] text-gray-500'>{startingYear}- {endingYear}</h1>
      <h1 className='text-[18px] leading-[27px] font-[400]'>{subject}</h1>
      <h1 className='text-[16px] leading-[27px] font-[400] text-gray-500'>{name}</h1>
      <h1 className='text-[16px] leading-[27px] font-[400] text-gray-500'>{location}</h1>
    </div>
  )
}

export default Educationbox
