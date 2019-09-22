import React, { useContext } from "react";
import MarkdownContext from "../Context/markdownContext";

const Output = () => {
  const markdownContext = useContext(MarkdownContext);
  const { markdown, renderMarkdown } = markdownContext;
  return (
    <div className='col-md-6'>
      <h1 className='text-center bg-info'>Preview</h1>
      <div dangerouslySetInnerHTML={renderMarkdown(markdown)} />
    </div>
  );
};

export default Output;
