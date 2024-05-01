import React, { useState, useEffect } from 'react';
import Courses from './json_files/source_json/Courses.json';
import { Filter } from "./filter_component/Filter";
import './filter_component/filter.css'


export const Tracs = () =>
{
  const backgroundImage = 'https://www.trnty.edu/wp-content/uploads/2019/02/commencement-DSC02734-1.jpg'
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Checking if Courses is loaded then setting Data
    setData(Courses);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  useEffect(() => {
    // Only filter data when Courses has been loaded
    if (data.length === 0) {
      return; // Exiting if Courses is empty to avoid null reference error
    }

    // Filter data for objects with "campus" equal to "GRAD"
    const filteredData = data.filter(entry => entry.campus === "TRACS");
    setFilteredData(filteredData);
  }, [data]); // Dependency on 'data' to re-run when 'data' changes

  return <Filter data={filteredData} backgroundImage = {backgroundImage}/>;
};