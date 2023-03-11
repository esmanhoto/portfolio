import './App.css';
import HeroSection from './components/Sections/Hero/HeroSection';
import Navbar from './components/Navbar';
import Skills from './components/Sections/Skills/Skills';
import Projects from './components/Sections/Projects/Projects';
import Contact from './components/Sections/Contact/Contact';
import { Element } from 'react-scroll';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import React, { useState } from 'react';
// import 'js-circle-progress/dist/circle-progress.min.css'; // add this line

function App() {
  const [matchPercentage, setMatchPercentage] = useState(0);

  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Element name="skills">
          <Skills setMatchPercentage={(number) => setMatchPercentage(number)} />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact matchPercentage={matchPercentage} />
        </Element>
      </div>
    </I18nextProvider>
  );
}

export default App;
