import { Outlet } from "react-router-dom"
import Navigator from "./Components/Navigator/Navigator"
import ProfileSection from "./Components/ProfileSection/ProfileSection"


function App() {

  return (
    <div>
      <div className="w-full h-[25vh]"></div>
      <div className="flex flex-col md:flex-row justify-evenly gap-10  items-center md:items-start min-h-[100vh]  pb-[25vh]">
    <ProfileSection/>
    <div className="flex flex-col-reverse md:flex-row justify-between gap-10 w-[95vw] md:w-[70%]">
      <div className="bg-white rounded-lg w-[100%] p-[20px] md:p-[40px] h-fit">
        <Outlet/>
      </div>
      <Navigator/>
    </div>
    </div>
    </div>
  )
}

export default App
