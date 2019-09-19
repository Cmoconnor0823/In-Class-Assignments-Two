import React, { useReducer } from "react";
import markdownContext from "./markdownContext";
import markdownReducer from "./markdownReducer";
import { HANDLE_INPUT_CHANGE } from "./types";
import marked from "marked";

const MarkdownState = props => {
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const initialState = {
    markdown: ""
  };

  const [state, dispatch] = useReducer(markdownReducer, initialState);

  const inputChange = e => {
    dispatch({ type: HANDLE_INPUT_CHANGE, payload: e.target.value });
  };

  const renderMarkdown = input => {
    return { __html: marked(input) };
  };

  return (
    <markdownContext.Provider
      value={{
        markdown: state.markdown,
        inputChange,
        renderMarkdown
      }}
    >
      {props.children}
    </markdownContext.Provider>
  );
};

export default MarkdownState;
