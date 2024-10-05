import { motion } from "framer-motion"
import { MdDownload } from "react-icons/md";
import { ReactTyped } from "react-typed";
const Body = () => {
    const handleDownload = ()=>{
        const link = document.createElement('a');
        link.href="/resume.pdf";
        link.download = "My_Resume.pdf"
        link.click();
    }
    const waveAnimation = {
        initial:{rotate:0},
        animate:{
            rotate:[0,10,-10,0],
            transition:{
                duration:1,
                repeat:Infinity,
                ease:"easeInOut"
    
            }
            }
       
    }
  return (
    <div id="home">
    <img alt="" className="absolute -z-20 w-screen h-full" src="https://t4.ftcdn.net/jpg/04/25/22/17/360_F_425221705_qOttbiNaY4oVnlKO6gX8sy7s0UrJvBYb.jpg" />
    <div className="py-28 px-10 md:py-48 md:px-20 w-screen ">
        
      <h1 className="font-bold text-6xl md:text-8xl">Hey <motion.img variants={waveAnimation} initial="initial" animate="animate" alt="hi" className="md:w-28  md:h-28 w-16 h-16 inline-block" src="https://www.svgrepo.com/show/398590/waving-hand.svg" /></h1>
      <h1 className="mt-10 md:mt-14 font-bold text-4xl md:text-7xl">I'm a{' '}
        <span className="text-purple-500 block md:inline-block text-3xl md:text-7xl">
      <ReactTyped
            strings={['Frontend Developer', 'React Developer', 'Web Designer']}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </span></h1>
      <motion.button onClick={handleDownload} whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="mt-10 md:mt-20 py-2 px-5 md:px-10 md:py-4 bg-purple-500 font-bold text-white text-xl md:text-3xl rounded-lg">Resume <MdDownload className="inline-block"/></motion.button>
    </div>
    </div>
  )
}

export default Body
