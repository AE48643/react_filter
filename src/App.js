import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Declare state variables
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([
    ['Eli', 'Germany'],
    ['Smith', 'Sweden'],
    ['Job', 'UK'],
    ['Jacob', 'Germany'],
  ]);

  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  useEffect(() => {
    // Use effect to handle filtering when the filter state changes
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Search for names.."
      />

      <table id="myTable">
        <thead>
          <tr>
            <th style={{ width: '60%' }}>Name</th>
            <th style={{ width: '40%' }}>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
