import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Element } from 'react-scroll';
import PersonalProject from './components/PersonalProject';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Element name='About me'>
        <AboutMe />
      </Element>
      <Element name='Experience'>
        <Experience />
      </Element>
    
      <Element name='Skills'>
        <Skills />
      </Element>
      <Element name='PersonalProject'>
        <PersonalProject />
      </Element>
      <Element name='Contact'>
        <Contact />
      </Element>
      
    </div>
  );
}

export default App;
