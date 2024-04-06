import React, { useEffect, useState } from 'react'
import UnivercialTitle from '../UnivercialTitle/UnivercialTitle'
import Modal from '../Modal/Modal'
import Projects from './Projects'


const Work = () => {

  let [isOpen, setIsOpen] = useState(false)
  const [projects, setProjects] = useState([])
  
  useEffect(()=>{
    fetch('https://final-poejects-gannery-server.vercel.app/projects')
    .then(res  => res.json())
    .then(data => setProjects(data))
  },[])


  return (
    <div>
      <UnivercialTitle title="Work"/>
      {
        projects?
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          projects.map((project)=>(
            <div key={project.id} className=''>
              <Projects isOpen={isOpen} setIsOpen={setIsOpen} project={project}/>
              {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <h1>{project.name}</h1>
              </Modal> */}
            </div>
          ))
        }
        </div>
        : <h1>Do Projects are available</h1> 
      }
      
    </div>
  )
}

export default Work
