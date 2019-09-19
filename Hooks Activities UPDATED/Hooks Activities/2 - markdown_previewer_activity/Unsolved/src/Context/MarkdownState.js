import React, { useReducer } from "react";
import markdownContext from "./markdownContext";
import markdownReducer from "./markdownReducer";
// import your type here
import marked from "marked"; // This is an NPM package for changing markup to HTML

const MarkdownState = props => {
  // Marked's setup is given to you so you get to read less documentation!
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  // Setting the initial state of your textarea

  const initialState = {
    markdown: ""
  };

  // Boilerplate way to use a reducer

  const [state, dispatch] = useReducer(markdownReducer, initialState);

  // Create a function below that dispatches a type and a payload to the reducer.
  // The payload should have the value of whatever has been inputted into the textarea.
  // Example dispatch syntax: dispatch({type: YOUR_IMPORTED_TYPE, payload: VALUE_OF_INPUT})

  // This function will render the markdown, but you have to put it somewhere to do so.
  const renderMarkdown = input => {
    return { __html: marked(input) };
  };

  // markdownContext.Provider creates a component that wraps around your entire app.
  // It gets exported as "MarkdownState".
  // Make sure to import it and wrap it around all of your components in App
  return (
    <markdownContext.Provider
      value={{
        markdown: state.markdown,
        // your function should be a part of this object here
        renderMarkdown
      }}
    >
      {props.children}
    </markdownContext.Provider>
  );
};

export default MarkdownState;
