import React from "react"; // import useContext here
// import MarkdownContext here

const Output = () => {
  // Take what you need from markdownContext here.
  // sample syntax: const myContext = useContext(ImportedContext)
  // sample syntax 2: const { var_I_need, function_I_need } = myContext
  return (
    <div className='col-md-6'>
      <h1 className='text-center bg-info'>Preview</h1>
      {/* Pass your text input from state into the function below to render the markdown */}
      {/* <div dangerouslySetInnerHTML={renderMarkdown()} /> */}
    </div>
  );
};

export default Output;
