import { useState, useEffect } from "react";

export const Filter =(props) => {

    
  const [data, useData] = useState(props.data);
  const [filters, setFilters] = useState(Array(3).fill(''));


  const handleInputChange = (event, index) => {
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

  return (
    <div>
      {data[0].map((column, index) => (
        <input
          key={index}
          type="text"
          value={filters[index]}
          onChange={(event) => handleInputChange(event, index)}
          placeholder={`Search for ${column.toLowerCase()}..`}
        />
      ))}

      <table id="myTable">
        <thead>
          <tr>
            {data[0].map((cell, i)=> (
              <th style={{ width: '60%' }} key={i}>{cell}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex} style={{ display: 'table-row' }}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
