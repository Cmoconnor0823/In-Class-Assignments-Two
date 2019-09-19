import React, { useState } from 'react';
import markdownContext from './markdownContext';
import marked from 'marked';

const MarkdownState = props => {
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const [markdown, setMarkdown] = useState('');

  const inputChange = e => {
    setMarkdown(e.target.value);
  };

  const renderMarkdown = input => {
    return { __html: marked(input) };
  };

  return (
    <markdownContext.Provider
      value={{
        markdown: markdown,
        inputChange,
        renderMarkdown
      }}
    >
      {props.children}
    </markdownContext.Provider>
  );
};

export default MarkdownState;
