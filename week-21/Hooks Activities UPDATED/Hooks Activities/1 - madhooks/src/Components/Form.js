import React, { useContext } from "react";
import MadContext from "../Context/madContext";

const Form = () => {
  const madContext = useContext(MadContext);
  const {
    addWord,
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
      <h1 className='text-center'>Madlibs Generator</h1>
      <div className='form-group'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Adjective 1'
          data-value='adjective1'
          onChange={addWord}
          value={adjective1}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Adjective 2'
          data-value='adjective2'
          onChange={addWord}
          value={adjective2}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Adjective 3'
          data-value='adjective3'
          onChange={addWord}
          value={adjective3}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Adjective 4'
          data-value='adjective4'
          onChange={addWord}
          value={adjective4}
        />

        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Color 1'
          data-value='color1'
          onChange={addWord}
          value={color1}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Color 2'
          data-value='color2'
          onChange={addWord}
          value={color2}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Noun 1'
          data-value='noun1'
          onChange={addWord}
          value={noun1}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Noun 2'
          data-value='noun2'
          onChange={addWord}
          value={noun2}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Noun 3'
          data-value='noun3'
          onChange={addWord}
          value={noun3}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Person'
          data-value='person'
          onChange={addWord}
          value={person}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Vegetable'
          data-value='vegetable'
          onChange={addWord}
          value={vegetable}
        />
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Verb'
          data-value='verb'
          onChange={addWord}
          value={verb}
        />
      </div>
    </div>
  );
};

export default Form;
