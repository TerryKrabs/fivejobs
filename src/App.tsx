import React from 'react';
import './App.css';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import AkrayaComponent from './components/Pages/AkrayaComponent';
import ClearanceComponent from './components/Pages/ClearanceComponent';
import InsightComponent from './components/Pages/InsightComponent';
import SpatialComponent from './components/Pages/SpatialComponent';
import TataComponent from './components/Pages/TataComponent';
import NavbarComponent from './components/NavbarComponent';


function App() {
  return (

    <BrowserRouter>
    <NavbarComponent />
    <Routes>
    <Route path='/' element={<AkrayaComponent />}/>
    <Route path='/Clearance' element={<ClearanceComponent />}/>
      <Route path='/Insight' element={<InsightComponent />}/>
      <Route path='/Spatial' element={<SpatialComponent />}/>
      <Route path='/Tata' element={<TataComponent />}/>
    </Routes> 
  </BrowserRouter>

  );
}

export default App;
