import { motion,useScroll } from "framer-motion";
const ScrollProgressBar = () => {
    const { scrollYProgress } = useScroll();
  
    return (
      <motion.div
        className="fixed top-0 right-0 w-2 rounded-b-full h-full z-50 origin-top bg-purple-800" // Added z-index to ensure it overlays
        style={{ scaleY: scrollYProgress }}
      />
    );
  };

  export default ScrollProgressBar;