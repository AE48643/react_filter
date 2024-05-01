import React, { useState, useEffect } from 'react';
import Courses from './json_files/source_json/Courses.json';
import { Filter } from "./filter_component/Filter";
import './filter_component/filter.css'


export const Main = () =>
{
  const backgroundImage = 'https://www.trnty.edu/wp-content/uploads/2023/05/MC_Commencement-Recap_Image_May-2023.docx-1200x628.jpg'

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
    const filteredData = data.filter(entry => entry.campus === "MAIN");
    setFilteredData(filteredData);
  }, [data]); // Dependency on 'data' to re-run when 'data' changes

  return <Filter data={filteredData} backgroundImage = {backgroundImage}/>;
};
