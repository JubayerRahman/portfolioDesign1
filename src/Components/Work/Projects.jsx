import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { LuClipboardList } from "react-icons/lu";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";



const Projects = ({project}) => {

  let [isOpen, setIsOpen] = useState(false)

  return (
    <div onClick={()=>setIsOpen(!isOpen)} className='bg-defaultBg p-[20px] rounded-lg cursor-help flex flex-col gap-3 hover:scale-[1.1] ease-out duration-75'>
        <img className='rounded-lg h-[150px] object-cover object-top ' src={project.img}/>
        <h1>{project.name}</h1>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className='flex flex-col items-center justify-evenly w-full'>
          <h1 className='text-black hover:text-blue-600 text-center text-4xl font-[600] pt-[20px]'>{project.name}</h1>
          <div className='pt-[50px] pb-[50px] grid grid-cols-1 md:grid-cols-2 w-full gap-4'>
            <h1 className='flex gap-1 font-[500] text-xl items-center'><LuClipboardList className='text-4xl'/> Project: Website</h1>
            <h1 className='flex gap-1 font-[500] text-xl items-center'><IoCodeSlashOutline className='text-4xl'/> Langhage: HTML, CSS, Javascript</h1>
            <h1 className='flex gap-1 font-[500] text-xl items-center'><FaGithubAlt className='text-4xl'/> code: <a href={project.GitRepo} target='_blank'>Click here</a></h1>
            <h1 className='flex gap-1 font-[500] text-xl items-center'><LuExternalLink className='text-4xl'/> Preview: <a href={project.LiveLink} target='_blank'>Click here</a></h1>
          </div>
          <p className='pb-[50px]'>{project.description}</p>
            <img className='rounded-lg' src={project.img}/>
          </div>
        </Modal>
      </div>
  )
}

export default Projects
