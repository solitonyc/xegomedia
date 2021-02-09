import './App.css';
import React, {Component} from 'react';
import Navigation from './navbar/Navigation';
import Main from './sections/Main';
import Services from './sections/Services';
import Video from './sections/Video';
import Photography from './sections/Photography';
import Webdevelopment from './sections/Webdevelopment';
import Branding from './sections/Branding';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Services />
      <Branding />
      <Video />
      <Photography />
      <Webdevelopment />
      <Footer /> 
     
    </div>
  );
}

export default App;
