import React from 'react'
import {
  Homepage,
  Contact,
  Partners,
  Achievements,
  IndividualP,
  Teams,
  Moments,
  GalleryPage
} from './pages'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import PartnerCrit from './Components/Partners/PartnerCrit'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/teams' element={<Teams/>} />
        <Route path='/partners/:id' element={<IndividualP/>} />
        <Route path='/partners/criteria' element={<PartnerCrit/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App