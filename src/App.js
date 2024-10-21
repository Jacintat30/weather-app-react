import React from "react";
import Weather.js from "./Weather.js";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="Houston" />
        <footer>
          This project was coded by{" "}
          <a 
            href="https://github.com/Jacintat30/weather-app-react"
            target="_blank" 
            rel="noopener noreferrer"
            >
              Jacinta Tandoh
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify.
          </a>
        </footer>    
       </div>
   </div>
 );
}