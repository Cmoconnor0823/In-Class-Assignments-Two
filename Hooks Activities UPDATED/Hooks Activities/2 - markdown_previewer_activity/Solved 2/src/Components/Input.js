import React, { useContext } from "react";
import MarkdownContext from "../Context/markdownContext";

const Input = () => {
  const markdownContext = useContext(MarkdownContext);
  const { inputChange, markdown } = markdownContext;
  return (
    <div className='col-md-6'>
      <h1 className='text-center bg-secondary text-white'>
        Enter markdown here
      </h1>
      <textarea
        className='bg-dark text-white'
        style={{ width: "100%", height: "100vh" }}
        placeholder='Enter markdown here'
        name='markdown'
        value={markdown}
        onChange={inputChange}
      />
    </div>
  );
};

export default Input;
