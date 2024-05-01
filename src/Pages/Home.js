// Grad.js
import React, { useState, useEffect } from 'react';
import Courses from './json_files/source_json/Courses.json';
import {Filter} from './filter_component/Filter'
import './filter_component/filter.css'; // Import the CSS file for styling


export const Home = () => {


  const backgroundImage = 'https://www.trnty.edu/wp-content/uploads/2020/03/trinity-aerial-0044.jpg'
  const [data, setData] = useState([]);

  useEffect(() => {
    // Checking if Courses is loaded then setting Data
    setData(Courses);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

 

  return <Filter data={data} backgroundImage = {backgroundImage}/>;
};



