import { useState } from "react"
import { BsProjectorFill } from "react-icons/bs";
import { FaHome, FaPhoneAlt, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { motion } from "framer-motion";

const NavBar = () => {
    const [show,setShow] = useState(false);
    const variants = {
        open : {opacity:1,x:0},
        close : {opacity:0,x:"-100%"}
    }
    const handleHamburgerClick = ()=>{
        setShow(!show);
    }
  return (
    <>
    <div className="flex fixed w-screen justify-between z-30 bg-purple-500 items-center text-white p-2 px-5 md:p-6 md:px-20 shadow-lg rounded-b-lg">
      <div>
        <h1 className="font-extrabold text-2xl md:text-4xl">{"<Sooraj/>"}</h1>
      </div>
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={handleHamburgerClick} className="bg-purple-950 p-1 md:p-2 rounded-full">
      <GiHamburgerMenu className=" w-5 h-5 md:w-8 md:h-8"/>
      </motion.button>
    </div>
   
    <motion.nav onClick={()=>setShow(false)} animate={show ? "open":"close"} variants={variants} transition={{duration:0.3}} className="bg-white fixed  z-20  top-0 border-2 h-screen w-screen md:w-3/12 border-purple-500 rounded-lg shadow-lg">
        <ul className="text-purple-500 p-5  mx-5 my-24 font-semibold text-2xl cursor-pointer">
            <a href="#home"><li className="m-5 p-5 hover:scale-110 hover:shadow-lg rounded-lg"><FaHome className="inline-block -mt-2"/> Home</li></a>
            <a href="#aboutMe"><li className="m-5 p-5 hover:scale-110 hover:shadow-lg rounded-lg"><FaUser className="inline-block -mt-2"/> About Me</li></a>
            <a href="#project"><li className="m-5 p-5 hover:scale-110 hover:shadow-lg rounded-lg"><BsProjectorFill className="inline-block "/> Projects</li></a>
            <a href="#contactMe"><li className="m-5 p-5 hover:scale-110 hover:shadow-lg rounded-lg"><FaPhoneAlt className="inline-block -mt-2"/> Contact me</li></a>
        </ul>

    </motion.nav>
    
   
    </>
  )
}

export default NavBar
