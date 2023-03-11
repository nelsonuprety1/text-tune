import React from 'react';
import Footer from '../Footer/Footer';
import './similar.css';
const Similar = () => {
  return (
    <div className="similar-content">
      <h1 className="main-heading">Choose your words wisely.</h1>
      <p className="contents">
        Our synonym and antonym finder helps you find the perfect ones. Upgrade
        your writing today.”
      </p>
      <div className="content-box">
        <label htmlFor="similarity">Please Enter one word at a time</label>
        <input id="similarity" type="text"></input>
        <div className="buttons">
          <button className="btns">Synonym</button>
          <button className="btns">Antonym</button>
          <button className="btns">Copy to Clipboard</button>
        </div>
      </div>
      <div className="textbox">
        <textarea name="similarbox" id="similarbox" readOnly></textarea>
      </div>
      <Footer />
    </div>
  );
};

export default Similar;
