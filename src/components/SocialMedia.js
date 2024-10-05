import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const SocialMedia = () => {
  return (
    <div className="flex mt-5 md:mt-10 justify-center items-center">
      <ul className="flex gap-5 md:gap-20">
        <li><a href="https://www.linkedin.com/in/sooraj-np-2818b0224/" target="_blank" rel="noreferrer"><FaLinkedin className="w-8 h-8 md:w-12 md:h-12 text-purple-950 hover:text-purple-300"/></a></li>
        <li><a href="https://x.com/NPSooraj7" target="_blank" rel="noreferrer"><FaSquareXTwitter className="w-8 h-8 md:w-12 md:h-12 text-purple-950 hover:text-purple-300"/></a></li>
        <li><a href="https://github.com/Sooraj2003?tab=repositories" target="_blank" rel="noreferrer"><FaGithubSquare className="w-8 h-8 md:w-12 md:h-12 text-purple-950 hover:text-purple-300"/></a></li>
        <li><a href="https://www.instagram.com/sooraj_np/" target="_blank" rel="noreferrer"><FaInstagramSquare className="w-8 h-8 md:w-12 md:h-12 text-purple-950 hover:text-purple-300"/></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia
