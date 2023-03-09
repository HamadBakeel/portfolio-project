import './App.css';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      setIsPageLoaded(true);
    });
  }, []);

  return (
    <>
          {!isPageLoaded && <Loader />}
          { 
            isPageLoaded
            && 
            <Home currentSection={currentSection} setCurrentSection={(sectionIndex)=> setCurrentSection(sectionIndex)}/>
          }

      {/* <Navbar/> */}
    </>

  );
}

export default App;
