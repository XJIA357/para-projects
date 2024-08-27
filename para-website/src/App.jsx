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
import Edgewater from './projects/Edgewater';
import HubsonBay from './projects/HubsonBay';
import OfficeFitout from './projects/OfficeFitout';
import CommercialFitout from './projects/CommercialFitout';
import ShopFitout from './projects/ShopFitout';
import HendersonApartment from './projects/HendersonApartment';

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-grow sm:px-20 rem'>
          <Routes>
            <Route path='/'>
              <Route index element={<Navigate to="projects"/>}/>
              <Route path='home' element={<Home />}/>
              <Route path='gallery' element={<Gallery />}/>
              <Route path='projects' element={<Projects />} />
              <Route path='projects/1' element={<ScottPoint />} />
              <Route path='projects/2' element={<HubsonBay />} />
              <Route path='projects/3' element={<FalconGreen />} />
              <Route path='projects/4' element={<HendersonApartment />} />
              <Route path='projects/5' element={<Edgewater />} />
              <Route path='projects/6' element={<CommercialFitout />} />
              <Route path='projects/7' element={<OfficeFitout />} />
              <Route path='projects/8' element={<ShopFitout />} />
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
