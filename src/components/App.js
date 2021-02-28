import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [cityList, setCityList] = useState([
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" }
  ]);
  const List = () => {
    let count = 0;
    const allList = cityList.map((ele, index) => {
      if (ele.country === "India") {
        return <li key={`location${count++}`}>{ele.name}</li>;
      }
    });
    return <ol>{allList}</ol>;
  };

  return <div id="main">{List()}</div>;
};

export default App;
