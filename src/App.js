import React from 'react';
import Home from './Components/Home'
import Navigation from './Components/Navigation'
import WeAreDifferentSection from './Components/WeAreDifferentSection'
import FindOutMoreSection from './Components/FindOutMoreSection'
import SocialLinks from './Components/SocialLinks'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <WeAreDifferentSection/>
      <FindOutMoreSection/>
      <SocialLinks/>
    </div>
  );
}

export default App;
