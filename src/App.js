import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import "./components/styles/App.css"
import Resume from './components/Resume';
import Project from './components/Projects';


function App() {
  return (
      <BrowserRouter>
        <Header/>
         <Routes>
            <Route exact path="/" element={<AboutMe/>}/>
            <Route exact path="/resume" element={<Resume/>}/>
            <Route exact path="/projects" element={<Project/>}/>
         </Routes>
      </BrowserRouter>
 
    
    );
}

export default App;
