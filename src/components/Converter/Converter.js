import './converter.css';

import React from 'react';

const Converter = () => {
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
          name="contentBox"
          id="contentBox"
          placeholder="Type or paste your text"
        ></textarea>
      </div>
      <div className="buttons">
        <button className="btns">UPPERCASE</button>
        <button className="btns">lowercase</button>
        <button className="btns">Title Case</button>
        <button className="btns">Reverse Text</button>
        <button className="btns">Remove WhiteSpace</button>
        <button className="btns">Copy to Clipboard</button>
        <button className="btns">Clear</button>
      </div>
    </div>
  );
};

export default Converter;
