import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [cityList, setCityList] = useState([
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" },
  ]);
  let count = 0;

  return (
    <div id="main">
      <ol>
        {cityList.map((ele, index) => {
          if (ele.country === "India") {
            count++;
            return <li key={`loction${count}`}>{ele.name}</li>;
          }
        })}
      </ol>
    </div>
  );
};

export default App;
