const Intro = () => {
  return (
    <div className="text-white p-2 px-5 md:p-5 md:px-20">
      <h1 className="font-bold text-3xl md:text-6xl my-10">About me.</h1>
      <div className="bg-purple-400 p-5 rounded-lg shadow-lg">
      <p className="font-semibold text-sm md:text-2xl leading-relaxed">I'm Sooraj, an aspiring <span className="text-purple-900">Frontend Developer</span> dedicated to enhancing my skills by building great user interfaces. I have a passion for creating visually appealing, user-friendly, and performant applications. With a focus on modern web technologies like <span className="text-purple-900">React, Tailwind CSS,</span> and state management with <span className="text-purple-900">Redux,</span> I continuously strive to improve my ability to deliver seamless digital experiences. My goal is to craft responsive and accessible designs that not only look great but also provide a smooth user journey.</p>
      </div>
    </div>
  )
}

export default Intro
