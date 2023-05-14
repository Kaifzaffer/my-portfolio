import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Todo from '../assets/Todo.png'
import University from '../assets/University.png'
import video from '../assets/video.png'
import weather from '../assets/weather.png'
import { ProjectLists } from '../helpers/ProjectLists'
import '../styles/Projects.css'


function Project() {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                {
                    ProjectLists.map((project) => {
                        return <ProjectItem name={project.name} image={project.image} />
                    })
                }
            </div>
        </div>
    )
}

export default Project
