import React, { Component } from 'react';
// Components
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ParallaxImg from './components/ParallaxImg'
import Hello from './components/Hello'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Images
import forestBG from './assets/forestBGcopy.jpg'
import forestTall from './assets/forest-tall.jpg'

import './App.css';

/* const Profiler = React.unstable_Profiler */

class App extends Component {
  state = {
    navlinks: [
      {name: "Portfolio", link: "#portfolio"},
      {name: "Skills", link: "#skills"},
      {name: "About", link: "#about"},
      {name: "Contact", link: "#contact"},
    ]
  }

  /* loggingFunction(id, phase, actualTIme, baseTime){
    console.log(id)
    console.log(phase)
    console.log(actualTIme)
    console.log(baseTime)
  } */

  render() {
    return (
      <div id="App">
        {/* <Profiler id='Navbar' onRender={this.loggingFunction}> */}
        <Navbar navlinks={this.state.navlinks}/>
        {/* </Profiler> */}
        <ParallaxImg src={forestBG} subComp={<Hello />} style={{height: '100vh', margin: '0'}}/>
        <Projects />
        <ParallaxImg src={forestTall} subComp={[<About key='1'/>, <Skills key='2' />]} style={{padding: '4em 0'}}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

//TODOS
// add target="_blank" to links