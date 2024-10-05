import Intro from "./Intro"
import TechStacks from "./TechStacks"

const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-purple-500 pb-20 -mt-24 scroll-mt-24">
      <Intro/>
      <TechStacks/>
    </div>
  )
}

export default AboutMe;
