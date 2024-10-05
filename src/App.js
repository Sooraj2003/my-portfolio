import NavBar from './components/NavBar';
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  return (
    <div className=" m-0 p-0 scrollbar-hidden">
      <ScrollProgressBar/>
      <NavBar/>
      <Body />
      <AboutMe/>
      <Projects/>
      <ContactMe />
    </div>
  );
}

export default App;
