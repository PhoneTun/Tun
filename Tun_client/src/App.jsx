import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'; 
import React from 'react';
import LandingPage from './view/Landingpage';
import Registerpage from './view/Registerpage';
import Home from './view/Homepage'
import Loginpage from './view/Loginpage'; 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<LandingPage/>} path='/'/>
        <Route element = {<Registerpage/>} path='/register'/>
        <Route element = {<Home/>} path='/home/*'/>
        <Route element = {<Loginpage/>} path='/login'/>
        {/* <Route element = {<Register/>} path='/register'/> */}

      </Routes>  
    </BrowserRouter>
  )
}

export default App
