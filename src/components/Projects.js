import { projectData } from "../utils/projectConstants"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div id="project" className="bg-purple-200 p-2 md:p-5 px-5 md:px-20 scroll-mt-28">
        <h1 className="font-bold text-3xl md:text-6xl my-2 md:my-10">Projects.</h1>
        {projectData.map(data=><ProjectCard key={data.liveLink} data={data}/>)}
       
    </div>
  )
}

export default Projects
