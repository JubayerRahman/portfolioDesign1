import React from 'react'
import UnivercialTitle from '../UnivercialTitle/UnivercialTitle'
import { IoCodeSlash } from "react-icons/io5";
import { FaWordpressSimple } from "react-icons/fa";
import { FaReact } from "react-icons/fa";



const About = () => {
  return (
    <div className='min-h-fit flex flex-col gap-4 '>
      <UnivercialTitle title="About"/>
      <h1 className='text-[16px] font-[400] leading-[27px] text-gray-500'>Hi, I am a passionate web developer. I love to make attractive and useful websites. And learning new technology along with my work is a plus point. I always think and look to work on challenging ideas that will push the boundaries of my capabilities. I aim to learn and grow as a reliable individual for any company or business I work for.
      <br/> <br/>
      Welcome to my portfolio look around and let me know what you think about my work. I am always open to talk. </h1>
      <h1 className='text-[28px] leading-[42px] font-[500]'>What I Do!</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-defaultBg rounded-lg p-[20px] flex flex-col md:flex-row items-center gap-3 md:items-start'>
          <h1 className='text-5xl text-secondary'><IoCodeSlash/></h1>
          <div>
            <h1 className='text-[20px] leading-[30px] font-[500]'>MERN stack Development</h1>
            <p className='text-[16px] font-[400] leading-[30px] text-gray-500'>I am proficient with technologies related to the MERN stack. I can make useful websites using those technologies.</p>
          </div>
        </div>
        <div className='bg-defaultBg rounded-lg p-[20px] flex flex-col md:flex-row items-center gap-3 md:items-start'>
          <h1 className='text-5xl text-secondary '><FaWordpressSimple/></h1>
          <div>
            <h1 className='text-[20px] leading-[30px] font-[500]'>WordPress Development</h1>
            <p className='text-[16px] font-[400] leading-[30px] text-gray-500'>I can also make websites using WordPress. It is a popular and powerful CMS and I love working with it.</p>
          </div>
        </div>
        <div className='bg-defaultBg rounded-lg p-[20px] flex flex-col md:flex-row items-center gap-3 md:items-start'>
          <h1 className='text-5xl text-secondary '><FaReact/></h1>
          <div>
            <h1 className='text-[20px] leading-[30px] font-[500]'>React Native</h1>
            <p className='text-[16px] font-[400] leading-[30px] text-gray-500'>React native is a very powerful and user-friendly library to build cross-platform applications for Android and IOS I love it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
