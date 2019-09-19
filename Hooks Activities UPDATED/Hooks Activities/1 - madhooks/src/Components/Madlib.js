import React, { useContext, Fragment } from "react";
import MadContext from "../Context/madContext";

const Madlib = () => {
  const madContext = useContext(MadContext);
  const {
    resetForms,
    completed,
    adjective1,
    adjective2,
    adjective3,
    adjective4,
    color1,
    color2,
    noun1,
    noun2,
    noun3,
    person,
    vegetable,
    verb
  } = madContext;

  return (
    <div className='container-fluid'>
      {completed && (
        <Fragment>
          <h1 className='text-center'>
            Fall has arrived with a chill in the {noun1}. The leaves are turning{" "}
            {color1} and {color2}. Today was a {adjective1} day. My {noun2} went
            to the {vegetable} patch. {person} took us on a hay {verb} to a big{" "}
            {adjective2} field. We all got to pick a {vegetable}--it was{" "}
            {adjective3}. Tonight my {vegetable} sits by my {noun3}. What a{" "}
            {adjective4} day!
          </h1>
          <button
            className='btn btn-secondary btn-lg btn-block'
            onClick={resetForms}
          >
            Reset
          </button>
        </Fragment>
      )}

      {!completed && (
        <h1 className='text-center text-danger'>
          Finish entering all of the words!
        </h1>
      )}
    </div>
  );
};

export default Madlib;
