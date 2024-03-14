/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import './App.css';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Services from './components/pages/Services.jsx';
import Products from './components/pages/Products.jsx';
import SignUp from './components/pages/SignUp.jsx';
import Dashboard from './components/pages/Dashboard.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={ <Home />}/>
        <Route path='/services' element={ <Services />}/>
        <Route path='/products' element={ <Products />}/>
        <Route path='/sign-up' element={ <SignUp />}/>
        <Route path='/dashboard' element={ <Dashboard />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
