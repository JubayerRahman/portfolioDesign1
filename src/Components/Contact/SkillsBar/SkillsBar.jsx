import React from 'react'

const SkillsBar = ({name, percent}) => {
  return (
    <div className='w-full flex flex-col gap-5 mt-[20px] h-fit'>
        <div className='flex justify-between items-center'>
            <h1 className='text-[16px] leading-[24px] font-[400] text-gray-500'>{name}</h1>
            <h1 className='text-[16px] leading-[24px] font-[400] text-gray-500'>{percent}</h1>
        </div>
        <div className='relative w-full'>
        <div style={{width: percent}} className="bg-secondary h-[5px] rounded-xl absolute"></div>
            <div className='w-full bg-gray-300 h-[5px] rounded-xl '></div>
        </div>
    </div>
  )
}

export default SkillsBar
