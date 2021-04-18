import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import AboutMe from './Components/AboutMe';
import Contact from './Components/ContactInfo';
import Presentation from './Components/Presentation';
import AboutImage from './images/about.png';
import AboutImage1 from './images/download.png';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Feature/>
      <AboutMe image={AboutImage} title = 'random text to just fill in ##UPDATE' button='Press button'/>
      <Presentation/> 
      <AboutMe image={AboutImage1} title = '#####UPDATE######' button='Press the button!'/>
      <Contact/>
    </div>
  );
}

export default App;
