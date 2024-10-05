import { LOGO_ARRAY } from "../utils/constants"
import { motion } from "framer-motion"

const TechStacks = () => {
  return (
    <div className="p-2 px-5 md:p-5 md:px-20">
      <h1 className="font-bold text-3xl md:text-6xl my-5 mb-10 text-white">Tech Stack</h1>
      <div className="">
        <div className="bg-purple-300 p-10 rounded-lg shadow-lg  " >
            <div className="p-1 md:p-10 bg-black    rounded-2xl">
                <div className="flex flex-wrap justify-center gap-2 md:gap-10">{LOGO_ARRAY.map(src=><motion.div className="ml-5"  whileHover={{scale:1.1,rotate:[0,5,-5,0]}} transition={{duration:0.5,ease:"easeInOut"}}><img alt="logo" className=" bg-purple-500 p-2 md:p-5 rounded-lg w-20 h-20 md:w-60 md:h-60 object-cover" src={src}/></motion.div>)}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TechStacks
