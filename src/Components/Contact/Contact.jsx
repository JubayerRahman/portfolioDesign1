import React, { useState } from 'react'
import UnivercialTitle from '../UnivercialTitle/UnivercialTitle'

const Contact = () => {
  const [nameHeight, setNameHeight] = useState('h-[0px] duration-75 border-gray-500')
  const [emailHeight, setEmailHeight] = useState('h-[0px] duration-75 border-gray-500')
  const [messaeHeight, setMessageHeight] = useState('h-[0px] duration-75 border-gray-500')
  const NameClickFunction = ()=>{
    setNameHeight("h-[20px] duration-75 p-[15px] border-secondary")
  }
  const EmailClickFunction = ()=>{
    setEmailHeight("h-[20px] duration-75 p-[15px] border-secondary")
  }
  const MessageClickFunction = ()=>{
    setMessageHeight("h-[20px] duration-75 p-[15px] border-secondary")
  }
  return (
    <div>
      <UnivercialTitle title="Contact"/>
      <h1 className='text-gray-500 text-[25px] font-[400] mt-[50px]'>I'm Always Open To Discussing Projects</h1>
      <h1 className='text-black text-[25px] font-[700] mt-[15px] mb-[50px]'>Design work and partnerships.</h1>
      <form className='flex flex-col items-start mt-[25px] w-full'>
        <label className='font-[500] text-[16px]' htmlFor="name">Name *</label>
        <input onClick={NameClickFunction} className={`outline-none border-b-[1px]  duration-75 mt-[10px] mb-[50px] w-full ${nameHeight}`} type="text" id='name' />
        <label className='font-[500] text-[16px]' htmlFor="email">Email *</label>
        <input onClick={EmailClickFunction} className={`outline-none border-b-[1px] border-secondary duration-75 mt-[10px] mb-[50px] w-full ${emailHeight}`} type="text" id='email' />
        <label className='font-[500] text-[16px]' htmlFor="message">Message *</label>
        <textarea onClick={MessageClickFunction} className={`outline-none border-b-[1px] border-secondary duration-75 mt-[10px] mb-[50px] w-full ${messaeHeight}`} type="text" id='message' />
        <button className='p-[10px] pl-[20px] pr-[20px] border-2 border-black rounded-lg text-[16px] hover:bg-secondary hover:text-white hover:border-secondary duration-75 ease-out'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
