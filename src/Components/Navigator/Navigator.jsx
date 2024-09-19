import { CiUser } from "react-icons/ci";
import { FaRegFileLines } from "react-icons/fa6";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiContactsBookLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";




const Navigator = () => {
  return (
    <div className='bg-white p-[10px] rounded-xl flex flex-row md:flex-col justify-evenly md:gap-5 h-fit md:sticky top-[10vh] navBar'>
      <NavLink to="/" className="bg-defaultBg flex flex-col items-center gap-2 w-[23%] md:w-full p-[5px] md:p-[10px] text-gray-500 rounded-lg hover:bg-secondary hover:text-white duration-[0.5s] ease-out cursor-pointer">
        <h1 className="text-3xl"><CiUser/></h1>
        <h1  className="text-[13px] font-[500] leading-[13px]">About</h1>
      </NavLink>
      <NavLink to="/resume" className="bg-defaultBg flex flex-col items-center gap-2 w-[23%] md:w-full p-[5px] md:p-[10px] text-gray-500 rounded-lg hover:bg-secondary hover:text-white duration-[0.5s] ease-out cursor-pointer">
        <h1 className="text-3xl"><FaRegFileLines/></h1>
        <h1  className="text-[13px] font-[500] leading-[13px]">Resume</h1>
      </NavLink>
      <NavLink to="/work" className="bg-defaultBg flex flex-col items-center gap-2 w-[23%] md:w-full p-[5px] md:p-[10px] text-gray-500 rounded-lg hover:bg-secondary hover:text-white duration-[0.5s] ease-out cursor-pointer">
        <h1 className="text-3xl"><IoBagRemoveOutline/></h1>
        <h1  className="text-[13px] font-[500] leading-[13px]">Work</h1>
      </NavLink>
      <NavLink to="/contact" className="bg-defaultBg flex flex-col items-center gap-2 w-[23%] md:w-full p-[5px] md:p-[10px] text-gray-500 rounded-lg hover:bg-secondary hover:text-white duration-[0.5s] ease-out cursor-pointer">
        <h1 className="text-3xl"><IoBagRemoveOutline/></h1>
        <h1  className="text-[13px] font-[500] leading-[13px]">Contact</h1>
      </NavLink>
    </div>
  )
}

export default Navigator
