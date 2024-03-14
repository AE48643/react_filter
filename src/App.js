import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Grad } from './Pages/Grad';
import { Navbar } from './Navbar';
import { Tracs } from './Pages/Tracs';
import { Main } from './Pages/Main';
import { Home } from './Pages/Home';

function App() {

  return (
    <div className='App'>
      <Router>
        < Navbar />
        <Routes>
          <Route path = "/" element = {< Home />}/>
          <Route path = "/grad" element = {< Grad />}/>
          <Route path = "/main" element = {< Main />}/>
          <Route path = "/tracs" element = {< Tracs />}/>
          <Route path='*' element = {<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
