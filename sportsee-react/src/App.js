import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
async function getData() {
  const res = await fetch("http://localhost:3000/user/18", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return data;
}

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);
  console.log({ data });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
