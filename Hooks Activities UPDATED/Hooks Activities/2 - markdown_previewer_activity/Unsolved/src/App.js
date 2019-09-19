import React from "react";
import "./App.css";
import Input from "./Components/Input";
import Output from "./Components/Output";
// Import your state here and wrap your entire application in it

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Input />
        <Output />
      </div>
    </div>
  );
}

export default App;
