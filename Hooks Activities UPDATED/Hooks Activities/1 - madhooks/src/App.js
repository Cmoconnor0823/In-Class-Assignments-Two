import React, { Fragment } from "react";
import Form from "./Components/Form";
import Madlib from "./Components/Madlib";
import MadState from "./Context/MadState";

function App() {
  return (
    <MadState>
      <Fragment>
        <Form />
        <Madlib />
      </Fragment>
    </MadState>
  );
}

export default App;
