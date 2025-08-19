import React from 'react'
import UnivercialTitle from '../UnivercialTitle/UnivercialTitle'
import { LuGraduationCap } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import { CiMonitor } from "react-icons/ci";
import Educationbox from '../Educationbox/Educationbox';
import SkillsBar from '../Contact/SkillsBar/SkillsBar';
import { CiServer } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { TbUserCog } from "react-icons/tb";
import { BsMotherboard } from "react-icons/bs";
import { FaCode } from "react-icons/fa";






const Resume = () => {
  return (
    <div className='flex flex-col gap-5'>
      <UnivercialTitle title="Resume"/>
      <div className='flex flex-col md:flex-row justify-between'>
      <div className='md:w-[49%] mt-[20px]'>
        <h1 className='flex gap-2 items-center text-[26px] leading-[36px] font-[500] mb-[10px]'> <span className='text-secondary text-5xl'><LuGraduationCap/></span> Education</h1>
        <div className='flex flex-col gap-5 justify-evenly '>
          <Educationbox startingYear="2019 " endingYear="2023" name="Feni Polytechnic Institute" location="Feni, Bangladesh" subject="Diploma in Computer technology"/>
          <Educationbox startingYear="2017 " endingYear="2018" name="Hasan Ali Govt High School" location="Chandpur, Bangladesh" subject="secondary school certificate"/>
        </div>
      </div>
      <div className='md:w-[49%] mt-[20px] '>
        <h1 className='flex gap-2 items-center text-[26px] leading-[36px] font-[500] mb-[10px]'> <span className='text-secondary text-5xl'><FaCode/></span> Experience</h1>
        <div className='flex flex-col gap-5 justify-evenly '>
          <Educationbox startingYear="August, 2025 " endingYear="Present" name="Shabuj Global Education" location="Whitechapel, England" subject="Cross-Platform Mobile Developer "/>
          <Educationbox startingYear="July, 2024 " endingYear="July, 2025 (1 Year, 1 Month)" name="Shabuj Global Education" location="Whitechapel, England" subject="React Native Developer (Internship)"/>
          {/* <Educationbox startingYear="2017" endingYear="2028" name="Hasan Ali Govt High School" location="Chandpur, Bangladesh" subject="secondary school certificate"/> */}
        </div>
      </div>
      </div>
      <h1 className='flex gap-2 items-center text-[26px] leading-[36px] font-[500]'> <span className='text-secondary text-5xl'><TbBulb/></span> Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='bg-[#F3F6F6] p-[20px] rounded-xl w-full '>
        <h1 className='text-[18px] leading-[27px] font-[600] flex items-center gap-2'><span className='text-secondary text-5xl'><CiMonitor/></span> Frontend</h1>
        <SkillsBar name="H.T.M.L" percent="90%"/>
        <SkillsBar name="C.S.S" percent="80%"/>
        <SkillsBar name="Bootstrap" percent="75%"/>
        <SkillsBar name="Tailwind" percent="90%"/>
        <SkillsBar name="Javascript" percent="85%"/>
        <SkillsBar name="React" percent="90%"/>
        <SkillsBar name="Redux" percent="60%"/>
      </div>
      <div className='bg-[#F3F6F6] p-[20px] rounded-xl w-full h-fit'>
        <h1 className='text-[18px] leading-[27px] font-[600] flex items-center gap-2'><span className='text-secondary text-5xl'><CiServer/></span> Backend</h1>
        <SkillsBar name="Firebase" percent="80%"/>
        <SkillsBar name="Node.js" percent="50%"/>
        <SkillsBar name="Express" percent="65%"/>
        <SkillsBar name="JWT" percent="50%"/>
        <SkillsBar name="MongoDB" percent="70%"/>
      </div>
      <div className='bg-[#F3F6F6] p-[20px] rounded-xl w-full h-fit'>
        <h1 className='text-[18px] leading-[27px] font-[600] flex items-center gap-2'><span className='text-secondary text-5xl'><VscTools/></span> Tools</h1>
        <SkillsBar name="Git" percent="90%"/>
        <SkillsBar name="Github" percent="70%"/>
        <SkillsBar name="VScode" percent="80%"/>
        <SkillsBar name="npm" percent="60%"/>
        <SkillsBar name="Photoshop" percent="80%"/>
      </div>
      <div className='bg-[#F3F6F6] p-[20px] rounded-xl w-full h-fit'>
        <h1 className='text-[18px] leading-[27px] font-[600] flex items-center gap-2'><span className='text-secondary text-5xl'><TbUserCog/></span> Soft Skills</h1>
        <SkillsBar name="Teamwork" percent="95%"/>
        <SkillsBar name="Responsibility" percent="85%"/>
        <SkillsBar name="Motivation" percent="95%"/>
        <SkillsBar name="Flexibility" percent="80%"/>
        <SkillsBar name="Adaptability" percent="90%"/>
      </div>
      <div className='bg-[#F3F6F6] p-[20px] rounded-xl w-full h-fit'>
        <h1 className='text-[18px] leading-[27px] font-[600] flex items-center gap-2'><span className='text-secondary text-5xl'><BsMotherboard/></span> Others</h1>
        <SkillsBar name="wordpress" percent="75%"/>
        <SkillsBar name="Microsoft Word" percent="85%"/>
        <SkillsBar name="Microsoft Excel" percent="70%"/>
        <SkillsBar name="Microsoft PowerPoint" percent="80%"/>
        <SkillsBar name="Figma" percent="60%"/>
      </div>
      </div>
    </div>
  )
}

export default Resume
