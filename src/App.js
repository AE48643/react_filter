import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Grad } from './Pages/Grad';
import { Navbar } from './Navbar';
import { Tracs } from './Pages/Tracs';
import { Main } from './Pages/Main';

function App() {

  return (
    <div className='App'>
      <Router>
        < Navbar />
        <Routes>
          <Route path = "/" element = {< Grad />}/>
          <Route path = "/main" element = {< Main />}/>
          <Route path = "/tracs" element = {< Tracs />}/>
          <Route path='*' element = {<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
