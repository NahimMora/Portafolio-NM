'use client'
import React, {useRef} from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Aplicacion e-commerce",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        gitUrl: "https://github.com/thomasrey99/Las-Encinas-Boutique-",
        previewURL: "https://las-encinas-boutique-omega.vercel.app/home"
    },
    {
        id: 2,
        title: "Aplicacion e-commerce",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        gitUrl: "https://github.com/thomasrey99/Las-Encinas-Boutique-",
        previewURL: "https://las-encinas-boutique-omega.vercel.app/home"
    },
    {
        id: 3,
        title: "Aplicacion e-commerce",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        gitUrl: "https://github.com/thomasrey99/Las-Encinas-Boutique-",
        previewURL: "https://las-encinas-boutique-omega.vercel.app/home"
    }
]

const ProjectsSections = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  }  

  return (
    <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            Mis Proyectos
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4}}>
              <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewURL={project.previewURL}
              />
            </motion.li>
        ))}</ul>
    </section>
  )
}

export default ProjectsSections