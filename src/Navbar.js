import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <select onChange={(e) => window.location.href = e.target.value} value={location.pathname}>
        <option value="/">Home</option>
        <optgroup label="Programs">
          <option value="/grad">Grad</option>
          <option value="/main">Main</option>
          <option value="/tracs">Tracs</option>
        </optgroup>
      </select>
    </nav>
  );
};
