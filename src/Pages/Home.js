import React, { useState, useEffect } from "react";
import './home.css'; // assuming you have your CSS file properly linked
import Courses from './Courses.json';

export const Home = () => {
  const [datas, setDatas] = useState([]);
  const [titles, setTitles] = useState([])

  useEffect(() => {
    setDatas(Courses);
    
    if (Courses.length === 0) {
      return; // Exiting if Courses is empty to avoid null reference error
    }
    
    // Get all unique keys from the data objects
    const allKeys = Courses.reduce((keys , course) => {
      Object.keys(course).forEach(key => {
        if (!keys.includes(key) && key !== 'times') {
          keys.push(key);
        }
      });
      return keys;
    }, []);
    
    setTitles(allKeys);
  }, []); // This will execute only once when the component mounts

  // Check if datas is empty before rendering
  if (datas.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <table>
        <thead>
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
  );
};
