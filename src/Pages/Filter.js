import React, { useState, useEffect } from "react";
import "./filter.css";
import Courses from './Courses.json';

export const Filter = (props) => {
  const [filters, setFilters] = useState([]);
  const [tableVisible, setTableVisible] = useState(false);
  const [datas, setDatas] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    setDatas(Courses);
    if (Courses.length === 0) {
      return; // Exiting if Courses is empty to avoid null reference error
    }
    const allKeys = Courses.reduce((keys , course) => {
      Object.keys(course).forEach(key => {
        if (!keys.includes(key) && key !== 'times') {
          keys.push(key);
        }
      });
      return keys;
    }, []);
    setTitles(allKeys);
    // Initialize filters state with default values
    setFilters(Array(allKeys.length).fill(""));
  }, []); // This will execute only once when the component mounts

  useEffect(() => {
    // Set table visibility after data is loaded
    const timeout = setTimeout(() => {
      setTableVisible(true);
    }, 400); // 400 milliseconds delay
    return () => clearTimeout(timeout);
  }, [datas]); // Trigger visibility effect whenever datas change

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
    const visibleRows = Array(tr.length).fill(true); // Array to keep track of visible rows

    // Apply filters on all columns
    for (let i = 1; i < tr.length; i++) {
      // Start from 1 to skip the header row
      const tdArray = tr[i].getElementsByTagName("td");
      let isVisible = true;
      for (let j = 0; j < filters.length; j++) {
        // Check if the td element is defined before accessing its textContent
        if (tdArray[j]) {
          const txtValue = tdArray[j].textContent || tdArray[j].innerText;
          if (!txtValue.toUpperCase().includes(filters[j]) && filters[j] !== "") {
            isVisible = false;
            break;
          }
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

    // Check if all filters are empty, if yes, set all rows to visible
    if (filters.every(filter => filter === "")) {
      for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = ""; // Set all rows to visible
      }
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <a href="https://trollweb.trnty.edu/category/student-accounts/" target="_blank"><img className="logo" src="https://trollsathletics.com/images/logos/site/site.png" alt="Logo" /></a>

      <div className="table-container" style={{ opacity: tableVisible ? 1 : 0, transition: "opacity 1s" }}>
        <table id="myTable" className="myTable">
          <thead>
          <tr style={{ display: tableVisible ? "" : "none" }}>
              {titles.map((column, index) => (
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
            <tr>
              {/* Loop through the keys to get table headers */}
              {titles.map((title, id) => (
                <th key={id}>{title}</th>  
              ))}
            </tr>
          </thead>
          <tbody>
            {datas.map((data, id) => (
              <tr key={id}>
                {/* Loop through the values of each data object to get table cells */}
                {titles.map((title, index) => (
                  <td key={index}>
                    {/* If the value is an array (like 'times'), format it */}
                    {Array.isArray(data[title]) ? (
                      data[title].map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {/* If the item is an object, display its key-value pairs */}
                          {typeof item === 'object' ? (
                            Object.entries(item).map(([key, value], entryIndex) => (
                              <p key={entryIndex}><strong>{key}</strong>: {value}</p>
                            ))
                          ) : (
                            // Otherwise, simply display the value
                            item
                          )}
                        </div>
                      ))
                    ) : (
                      // If not an array, simply display the value
                      data[title]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Filter;
