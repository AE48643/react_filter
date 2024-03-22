import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Grad } from './Pages/Grad';
import { Navbar } from './Navbar';
import { Tracs } from './Pages/Tracs';
import { Main } from './Pages/Main';
import { Home } from './Pages/Home';

function App() {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState('');

  // Function to set background image based on route
  const setBackground = (pathname) => {
    switch (pathname) {
      case '/':
        setBackgroundImage('https://www.trnty.edu/wp-content/uploads/2023/10/troll-HAN06197.jpg');
      case '/grad':
        setBackgroundImage('https://www.trnty.edu/wp-content/uploads/2023/10/troll-HAN06197.jpg');
        break;
      case '/main':
        setBackgroundImage('https://www.trnty.edu/wp-content/uploads/2023/05/MC_Commencement-Recap_Image_May-2023.docx-1200x628.jpg');
        break;
      case '/tracs':
        setBackgroundImage('https://www.trnty.edu/wp-content/uploads/2019/02/commencement-DSC02734-1.jpg');
        break;
      default:
        setBackgroundImage('https://www.trnty.edu/wp-content/uploads/2023/10/troll-HAN06197.jpg');
        break;
    }
  };

  // Call setBackground when location changes
  useEffect(() => {
    setBackground(location.pathname);
  }, [location.pathname]);

  return (
    <div className='App' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='MenuBar'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grad" element={<Grad />} />
          <Route path="/main" element={<Main />} />
          <Route path="/tracs" element={<Tracs />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
      <div className='buttom'>
        <a href="https://www.trnty.edu/" target = "_blank"><img src="https://i.vimeocdn.com/portrait/30721683_640x640" alt ="Trinity logo" height = "150px" width = "150px"/></a>
      </div>
    </div>
  );
}

export default App;
