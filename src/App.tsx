import React from 'react';
import { Navbar } from './Components/Navbar';
import './Sass/universal.scss'
import { Dashboard } from './Components/Dashboard';
import { About } from './Components/About';
import { Project } from './Components/Projects';
import { Slider } from './Components/Slider';


function App() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Slider/>
    <Project/>
    </>
  );
}

export default App;
