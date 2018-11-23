import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/ImageLink/ImageLink';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particleoptions = {
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
       "onclick": {
        "enable": true,
        "mode": "bubble"
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
                params={particleoptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLink />
        {/*
                
                <FaceDetect />*/}
      </div>
    );
  }
}

export default App;
