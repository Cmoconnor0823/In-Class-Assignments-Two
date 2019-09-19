import React from "react"; // import useContext here
// import MarkdownContext here

const Input = () => {
  // Take what you need from markdownContext here.
  // sample syntax: const myContext = useContext(ImportedContext)
  // sample syntax 2: const { var_I_need, function_I_need } = myContext
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
        // value=?
        // onChange=?
      />
    </div>
  );
};

export default Input;
