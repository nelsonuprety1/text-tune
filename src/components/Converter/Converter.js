import './converter.css';

import React, { useState } from 'react';

const Converter = () => {
  const [textContent, setTextContent] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handlingButtonClick = text => {
    let changedText;
    switch (text) {
      case 'uppercasing':
        changedText = textContent.toUpperCase();
        break;
      case 'lowercasing':
        changedText = textContent.toLowerCase();
        break;
      case 'titlecasing':
        /**
         * In this code
         -- split(' ') it splits the input string into an array of words

         -- .map() it loops over each word in the array, and it applied a function
         that capitalized the first letter of the word and converted rest of the letters to lowercase

         -- .slice(1) method is used to get a substring of word starting 
         from the second character, which removes the first character of the word.
         eg: if word is 'eminem' , word.slice(1) returns 'minem

         -- .join(' ') combined the modified words back into a sing string,with each word
         separated by the space. 
         */
        changedText = textContent
          .split(' ')
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');
        break;
      case 'reversing':
        changedText = textContent.split('').reverse().join('');
        break;
      case 'removewhitespace':
        changedText = textContent.split(' ').join('');
        break;
      case 'copy':
        navigator.clipboard.writeText(textContent);
        changedText = textContent;
        break;
      case 'clear':
        changedText = '';
        break;
      default:
        changedText = '';
    }
    setTextContent(changedText);
  };

  const handlingTextChange = event => {
    setTextContent(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="heading">
        Are you tired of manually converting your text?
      </h1>
      <p className="content">
        Convert text case quickly and easily with our tool - just enter your
        text, select the desired case, and let our tool do the work for you. Try
        it now and save time retyping text.
      </p>
      <div className="textbox">
        <p className="words">Words:</p>
        <p className="characters">Characters: </p>
        <textarea
          value={textContent}
          onChange={handlingTextChange}
          name="contentBox"
          id="contentBox"
          placeholder="Type or paste your text"
        ></textarea>
      </div>
      <div className="buttons">
        <button
          className="btns"
          onClick={() => handlingButtonClick('uppercasing')}
        >
          UPPERCASE
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('lowercasing')}
        >
          lowercase
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('titlecasing')}
        >
          Title Case
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('reversing')}
        >
          Reverse Text
        </button>
        <button
          className="btns"
          onClick={() => handlingButtonClick('removewhitespace')}
        >
          Remove WhiteSpace
        </button>
        <button className="btns" onClick={() => handlingButtonClick('copy')}>
          Copy to Clipboard
        </button>
        <button className="btns" onClick={() => handlingButtonClick('clear')}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Converter;
