import { useState, useEffect } from "react";

export const Grad = () =>
{
    // Declare state variables
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([
    ['Name', 'Country'],
    ['Eli', 'Germany'],
    ['Smith', 'Sweden'],
    ['Job', 'UK'],
    ['Jacob', 'Germany'],
    ['Halo', 'Germany'],
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