import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className='middle'>
      <nav>
        <select value={location.pathname} onChange={(e) => { window.location.href = e.target.value; }}>
          <option value="/">Home</option>
          <optgroup label="Programs">
            <option value="/grad">Grad</option>
            <option value="/main">Main</option>
            <option value="/tracs">Tracs</option>
          </optgroup>
        </select>
      </nav>
      </div>
  );
};
