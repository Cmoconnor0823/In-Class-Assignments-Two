import React, { useReducer } from "react";
import madContext from "./madContext";
import madReducer from "./madReducer";
import { COMPLETENESS, UPDATE_WORD, RESET } from "./types";

const MadState = props => {
  const initialState = {
    adjective1: "",
    adjective2: "",
    adjective3: "",
    adjective4: "",
    color1: "",
    color2: "",
    noun1: "",
    noun2: "",
    noun3: "",
    person: "",
    vegetable: "",
    verb: "",
    completed: false
  };

  const [state, dispatch] = useReducer(madReducer, initialState);

  const isComplete = () => {
    if (
      state.adjective1 &&
      state.adjective2 &&
      state.adjective3 &&
      state.adjective4 &&
      state.color1 &&
      state.color2 &&
      state.noun1 &&
      state.noun2 &&
      state.noun3 &&
      state.person &&
      state.vegetable &&
      state.verb
    ) {
      dispatch({ type: COMPLETENESS, payload: true });
    } else {
      dispatch({ type: COMPLETENESS, payload: false });
    }
  };

  const addWord = e => {
    dispatch({
      type: UPDATE_WORD,
      payload: [e.target.getAttribute("data-value"), e.target.value]
    });
    isComplete();
  };

  const resetForms = e => {
    e.preventDefault();
    dispatch({ type: RESET });
  };

  return (
    <madContext.Provider
      value={{
        adjective1: state.adjective1,
        adjective2: state.adjective2,
        adjective3: state.adjective3,
        adjective4: state.adjective4,
        color1: state.color1,
        color2: state.color2,
        noun1: state.noun1,
        noun2: state.noun2,
        noun3: state.noun3,
        person: state.person,
        vegetable: state.vegetable,
        verb: state.verb,
        completed: state.completed,
        addWord,
        resetForms
      }}
    >
      {props.children}
    </madContext.Provider>
  );
};

export default MadState;
