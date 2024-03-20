import React, { useState, useEffect } from "react";
import './filter.css';

export const Home = () => {
  // Declare state variables
  // const [filters, setFilters] = useState(Array(3).fill(''));
  
  const [data, setData] = useState([
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Joan', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'], 
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Ruth', 'Ethiopia', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Yari', 'Mexico', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Jacob', 'US', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Hyun', 'Korea', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
    ['Gun', 'Korea', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location', 'Name', 'Country', 'Start', 'Location', 'Start', 'Location'],
    ['Izzy', 'US', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202', 'Eli', 'Germany', '11:40AM ', 'CL202', '11:40AM ', 'CL202' ],
    ['Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010', 'Smith', 'Sweden', '2:30PM', 'GR010', '2:30PM', 'GR010' ],
    ['Sharon', 'Germany', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR', 'Job', 'UK', '', 'ARR', '', 'ARR' ],
    ['Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online', 'Donuts', '', '', 'Online', '', 'Online'],
  ]);

/*  const handleInputChange = (event, index) => {
    const newFilters = [...filters];
    newFilters[index] = event.target.value.toUpperCase();
    setFilters(newFilters);
  };

  const filterTable = () => {
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");
    const visibleRows = Array(tr.length).fill(true); // Array to keep track of visible rows

    // Apply filters on all columns
    filters.forEach((filterValue, columnIndex) => {
      for (let i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
        const td = tr[i].getElementsByTagName("td")[columnIndex];
        if (td) {
          const txtValue = td.textContent || td.innerText;
          const isVisible = visibleRows[i] && (txtValue.toUpperCase().includes(filterValue) || filterValue === '');
          visibleRows[i] = isVisible;
          tr[i].style.display = isVisible ? "" : "none";
        }
      }
    });
  };

  useEffect(() => {
    // Use effect to handle filtering when the filter state changes
    filterTable();
  }, [filters]);

  */
  return (
    <div className="container">
      <img className="logo" src="https://trollsathletics.com/images/logos/site/site.png" alt="Logo" />

      <div className="table-container">
        <table id="myTable">
          <thead>
            <tr>
              {data[0].map((cell, i)=> (
                <th key={i}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
