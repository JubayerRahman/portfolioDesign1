import React from 'react'

const UnivercialTitle = ({title}) => {
  return (
    <div className='flex items-center gap-3'>
      <h1 className='specialFont text-[40px] font-[600] leading-[60px]'>{title}</h1>
      <div className='bg-secondary w-[200px] h-[3px] rounded-xl'></div>
    </div>
  )
}

export default UnivercialTitle
