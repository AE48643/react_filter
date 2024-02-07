
import React, { useState } from 'react';
import './App.css';

function App() {

    // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  console.log(input)
  
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          // Need to change the java/css elements to reactJS
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }

  return (
    <div className="App">
        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.."></input>
        <h1>{input}</h1>

        <table id="myTable">
          <tr class="header">
            <th>Name</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbkop</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Koniglich Essen</td>
            <td>Germany</td>
          </tr>
        </table>
    </div>);
}

export default App;
