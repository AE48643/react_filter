// Grad.js
import React, { useState, useEffect } from "react";
import './grad.css'; // Import the CSS file for styling

export const Grad = () => {
  // Declare state variables
  const [filters, setFilters] = useState(Array(4).fill('')); // Adjusted to match the number of columns

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

  const handleInputChange = (event, index) => {
    const newFilters = [...filters];
    newFilters[index] = event.target.value.toUpperCase();
    setFilters(newFilters);
  };

  useEffect(() => {
    // Use effect to handle filtering when the filter state changes
    filterTable();
  }, [filters]);

  const filterTable = () => {
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");
    const visibleRows = Array(tr.length).fill(true) || Array(tr[0]).fill(true); // Array to keep track of visible rows

    // Apply filters on all columns
    for (let i = 1; i < tr.length; i++) { // Start from 1 to skip the header row
      const tdArray = tr[i].getElementsByTagName("td");
      let isVisible = true;
      for (let j = 0; j < filters.length; j++) {
        const txtValue = tdArray[j].textContent || tdArray[j].innerText;
        if (!txtValue.toUpperCase().includes(filters[j]) && filters[j] !== '') {
          isVisible = false;
          break;
        }
      }
      visibleRows[i] = isVisible; // Store visibility state without directly modifying row display
      if (!isVisible) {
        tr[i].classList.add("fadeOutAnimation"); // Apply animation class to fade out the row
      } else {
        tr[i].classList.remove("fadeOutAnimation"); // Remove animation class if row is visible
      }
    }

    // Toggle visibility based on stored state
    for (let i = 1; i < tr.length; i++) {
      tr[i].style.display = visibleRows[i] ? "" : "none";
    }
  };

  return (
    <div className="container">
      <img className="logo" src="https://trollsathletics.com/images/logos/site/site.png" alt="Logo" />

      <div className="table-container">
        <table>
          <thead>
            <tr>
              {data[0].map((column, index)=> (
                <th key={index}>
                  <input
                    type="text"
                    value={filters[index]}
                    onChange={(event) => handleInputChange(event, index)}
                    placeholder={`Search for ${column.toLowerCase()}..`}
                  />  
                </th>
              ))}
            </tr>
          </thead>
        </table>
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
