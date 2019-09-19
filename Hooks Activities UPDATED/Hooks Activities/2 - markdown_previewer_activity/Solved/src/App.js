import React from "react";
import "./App.css";
import Input from "./Components/Input";
import Output from "./Components/Output";
import MarkdownState from "./Context/MarkdownState";

function App() {
  return (
    <MarkdownState>
      <div className='container-fluid'>
        <div className='row'>
          <Input />
          <Output />
        </div>
      </div>
    </MarkdownState>
  );
}

export default App;
