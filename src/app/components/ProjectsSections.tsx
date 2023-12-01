import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Aplicacion e-commerce",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        gitUrl: "https://github.com/thomasrey99/Las-Encinas-Boutique-",
        previewURL: "https://las-encinas-boutique-omega.vercel.app/home"
    }
]

const ProjectsSections = () => {
  return (
    <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            Mis Proyectos
        </h2>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewURL={project.previewURL}
            />
        ))}</ul>
    </section>
  )
}

export default ProjectsSections