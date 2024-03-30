import image from "../../assets/me.jpg"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";


const ProfileSection = () => {
  return (
    <div className="bg-white p-[10px] rounded-xl drop-shadow-lg flex items-center flex-col gap-5 w-[95vw] md:w-fit md:sticky top-60">
      <div className="flex flex-col items-center gap-2">
        <img className="h-[240px] w-[240px] rounded-md mt-[-50%] object-cover" src={image}/>
        <h1 className="specialFont text-[26px] font-[500] cursor-pointer">Jobayer Rahman Ohee</h1>
        <h1 className="text-[16px] leading-[24px] font-[400] bg-defaultBg p-[10px] rounded-md">Web developer</h1>
    </div>
        <div className="socials flex gap-4 justify-evenly">
            <a className="bg-defaultBg p-[10px] text-2xl hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="https://twitter.com/jubayerr398" target="_blank">
                <FaXTwitter/>
            </a>
            <a className="bg-defaultBg p-[10px] text-2xl hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="https://github.com/JubayerRahman" target="_blank">
                <FaGithubAlt/>
            </a>
            <a className="bg-defaultBg p-[10px] text-2xl hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="https://www.linkedin.com/in/jubayer-rahman" target="_blank">
                <FaLinkedin/>
            </a>
        </div>
        <div className="contacts bg-defaultBg p-[10px] rounded-md w-full flex flex-col gap-2">
        <div className="Number flex gap-4 items-center">
        <h1 className="bg-white drop-shadow-lg w-fit p-[10px] text-3xl hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="*" target="_blank">
                <IoIosPhonePortrait/>
        </h1>
        <div>
            <p className="text-[12px] font-[400] leading-[18px]">Phone:</p>
            <p className="text-[16px] font-[400] leading-[24px]">01853062525</p>
        </div>
        </div>
        <div className="bg-gray-300 h-[2px] w-full"></div>
        <div className="EMail flex gap-4 items-center">
        <h1 className="bg-white drop-shadow-lg w-fit p-[10px] text-3xl text-gray-400 hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="*" target="_blank">
                <SiMinutemailer/>
        </h1>
        <div>
            <p className="text-[12px] font-[400] leading-[18px]">Email:</p>
            <p className="text-[16px] font-[400] leading-[24px]">jubayerr398@gmail.com</p>
        </div>
        </div>
        <div className="bg-gray-300 h-[2px] w-full"></div>
        <div className="Location flex gap-4 items-center">
        <h1 className="bg-white drop-shadow-lg w-fit p-[10px] text-3xl text-gray-500 hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="*" target="_blank">
                <FaLocationDot/>
        </h1>
        <div>
            <p className="text-[12px] font-[400] leading-[18px]">Location:</p>
            <p className="text-[16px] font-[400] leading-[24px]">Chandpur, Bangladesh</p>
        </div>
        </div>
        <div className="bg-gray-300 h-[2px] w-full"></div>
        <div className="Birthday flex gap-4 items-center">
        <h1 className="bg-white drop-shadow-lg w-fit p-[10px] text-3xl text-secondary hover:bg-secondary hover:text-white duration-[0.5s] ease-out rounded-md" href="*" target="_blank">
                <FaRegCalendarAlt/>
        </h1>
        <div>
            <p className="text-[12px] font-[400] leading-[18px]">Birthday:</p>
            <p className="text-[16px] font-[400] leading-[24px]">01 March, 2003</p>
        </div>
        </div>
        </div>
        <a className="text-[18px] w-fit text-[white] leading-[24px] font-[400] bg-secondary p-[10px] rounded-md flex gap-2 items-center cursor-pointer mb-[25px]" href="https://drive.google.com/file/d/1JaPy4oWz-Y0Jl6iid-nd7eON0-oLN4WG/view?usp=drive_link" target="_blank"><FaFilePdf/> Resume</a>
      </div>
  )
}

export default ProfileSection
