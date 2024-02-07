import React from "react";
import "./Weather.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Houston" />

        <footer>
          This project was coded by Jacinta T,{" "}
          <a
            href="https://github.com/Jacintat30/prodject-weather/tree/master/src"
            target="_blank"
            rel="noopener noreferrer"
          >
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