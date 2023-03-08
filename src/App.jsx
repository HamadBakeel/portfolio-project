import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <Home currentSection={currentSection} setCurrentSection={(sectionIndex)=> setCurrentSection(sectionIndex)}/>
      <Navbar/>
    </>

  );
}

export default App;
