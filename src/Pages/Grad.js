import { useState, useEffect } from "react";

export const Grad = () =>
{
    // Declare state variables
    const [filterC, setFilterC] = useState('');
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([
      ['Name', 'Country'],
      ['Eli', 'Germany'],
      ['Smith', 'Sweden'],
      ['Job', 'UK'],
      ['Jacob', 'Germany'],
      ['Halo', 'Germany'],
    ]);

  
    const handleInputChangeC = (event) => {
      setFilterC(event.target.value.toUpperCase());
    };
    const handleInputChange = (event) => {
      setFilter(event.target.value.toUpperCase());
    };
  
  

    useEffect(() => {
      // Use effect to handle filtering when the filter state changes
      const table = document.getElementById("myTable");
      const tr = table.getElementsByTagName("tr");
    
      // Reset display style for all rows
      for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
      }
    
      // Apply the first filter on names
      for (let i = 0; i < tr.length; i++) {
        const td_N = tr[i].getElementsByTagName("td")[0];
        if (td_N) {
          const txtValue_N = td_N.textContent || td_N.innerText;
          if (txtValue_N.toUpperCase().indexOf(filter) === -1) {
            tr[i].style.display = "none";
          }
        }
      }
    
      // Apply the second filter on countries
      for (let i = 0; i < tr.length; i++) {
        const td_C = tr[i].getElementsByTagName("td")[1];
        if (td_C) {
          const txtValue_C = td_C.textContent || td_C.innerText;
          if (txtValue_C.toUpperCase().indexOf(filterC) === -1) {
            tr[i].style.display = "none";
          }
        }
      }
    }, [filterC, filter]);
    

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        placeholder="Search for names.."
      />

      <input
        type="text"
        value={filterC}
        onChange={handleInputChangeC}
        placeholder="Search for country.."
      />


      <table id="myTable">
        <thead>
          <tr>
          {data[0].map((cell, i)=> (
            <th style ={{width : '60%'}} key={i}>{cell}</th>
          ))}
          </tr>
          
        </thead>

        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}