import ProfileSection from "./Components/ProfileSection/ProfileSection"


function App() {

  return (
    <div>
      <div className="w-full h-[40vh]"></div>
      <div className="flex flex-col md:flex-row justify-evenly items-center min-h-[100vh]  pb-[25vh]">
    <ProfileSection/>
    </div>
    </div>
  )
}

export default App
