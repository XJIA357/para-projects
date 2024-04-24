import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useParams, Link, NavLink, Navigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';
import Certifications from './Certifications';
import Contacts from './Contacts';
import ScottPoint from './projects/ScottPoint';
import FalconGreen from './projects/FalconGreen';

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-grow sm:px-20 rem'>
          <Routes>
            <Route path='/'>
              <Route index element={<Navigate to="home"/>}/>
              <Route path='home' element={<Home />}/>
              <Route path='gallery' element={<Gallery />}/>
              <Route path='projects' element={<Projects />} />
              <Route path='projects/0' element={<ScottPoint />} />
              <Route path='projects/1' element={<FalconGreen />} />
              <Route path='certifications' element={<Certifications />}/>
              <Route path='contacts' element={<Contacts />}/>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
