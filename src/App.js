
import React from "react";
import Weather from "./Weather";

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Hello 
         <Weather city="Tokyo" />
        </h1>

      </header>
    </div>
  );
}

export default App;
