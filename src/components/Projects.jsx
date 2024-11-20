import React from 'react'
import ProjectItems from './ProjectItems'
import photo2 from '../assets/photo2.jpg'
import dictionaryApp from '../assets/dictionaryApp.png';
import calculatorApp from '../assets/calculatorApp.png';
import toDoLists from '../assets/toDoLists.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4 text-4xl pb-10 font-bold text-center text-[#001b5e]'>Projects</h1>
        <p>Explore my project section to discover how I've successfully translated ideas into tangible solutions, pushing the boundaries of creativity and problem-solving.</p>
        <div className='grid sm:grid-cols-2 gap-12 pt-10'>
            <ProjectItems img={dictionaryApp} title='Dictionary App'/>
            <ProjectItems img={toDoLists} title='To Do Lists'/>
            <ProjectItems img={calculatorApp} title='Calculator App'/>
            <ProjectItems img={photo2} title='caclccc' />
        </div>
    </div>
  )
}

export default Projects