import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />

            <Route path='/react-website-1' element={<Home />} />
            <Route path='/react-website-1/services' element={<Services />} />
            <Route path='/react-website-1/products' element={<Products />} />
            <Route path='/react-website-1/sign-up' element={<SignUp />} />
          </Routes>
      </Router>
    </>
  );
}