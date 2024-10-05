import { motion } from "framer-motion"
const ProjectCard = ({data}) => {
  const {src,desc,gitLink,liveLink} = data;
  return (
    <motion.div className="bg-purple-500 md:flex rounded-lg shadow-lg my-10 md:my-28"
    initial={{x:"100%",opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{duration:1,ease:"easeInOut"}}
    viewport={{once:true}}
    >
    <div className="w-full md:w-6/12">
      <img alt="project-image" className="p-4 " src={src}/>
      </div>
      <div className="bg-black w-full md:w-6/12 rounded-lg">
      <p className="text-slate-400 p-4 text-sm md:text-xl leading-relaxed"><span className="text-white font-bold">Description : </span>{desc}</p>
      <div className="flex m-2 p-2">
        <a href={gitLink} target="_blank" rel="noreferrer" className="bg-purple-500 text-white hover:bg-purple-300 px-2 md:px-4 py-1 md:py-2 font-bold rounded-lg">GitHub</a>
        <a href={liveLink} target="_blank" rel="noreferrer" className="bg-purple-500 text-white hover:bg-purple-300  ml-2 px-4 md:px-6 py-1 md:py-2 font-bold rounded-lg">Live</a>
      </div>
    </div>
    </motion.div>
  )
}

export default ProjectCard
