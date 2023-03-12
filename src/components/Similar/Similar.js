import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Footer/Footer';
import './similar.css';

const Similar = () => {
  const [words, setWords] = useState('');
  const [error, setError] = useState(null);
  const [type, setType] = useState('');

  /*
Not using useEffect because fetching data
immediately when the component mounts is
not needed.

We are fetching data in response to user interaction.
*/

  // useEffect(() => {
  //   axios
  //     .get(`https://api.datamuse.com/words?rel_syn=excuse`)
  //     .then(res => setWords(res.data))
  //     .catch(error => setError(error));
  // }, []);

  // for synonym
  const getSynonym = () => {
    const word = document.getElementById('similarity').value;
    axios
      .get(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then(res => {
        const synonymWords = res.data.map(word => `- ${word.word}`).join('\n');
        setWords(`Here are your synonyms:\n${synonymWords}`);
        setType('synonyms');
      })
      .catch(error => setError(error));
  };

  // for antonym
  const getAntonym = () => {
    const word = document.getElementById('similarity').value;
    axios
      .get(`https://api.datamuse.com/words?rel_ant=${word}`)
      .then(res => {
        const antonymWords = res.data.map(word => `- ${word.word}`).join('\n');
        setWords(`Here are your antonyms:\n${antonymWords}`);
        setType('antonyms');
      })
      .catch(error => setError(error));
  };

  if (error) {
    return <div>Oops! An error occurred: {error.message}</div>;
  }

  const copyToClipboard = () => {
    const textToCopy = document.getElementById('similarbox').value;
    navigator.clipboard.writeText(textToCopy);
    alert('Copied To Clipboard');
  };

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
          <button className="btns" onClick={getSynonym}>
            Synonym
          </button>
          <button className="btns" onClick={getAntonym}>
            Antonym
          </button>
          <button className="btns" onClick={copyToClipboard}>
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div className="textbox">
        <textarea
          name="similarbox"
          id="similarbox"
          readOnly
          value={words}
          placeholder={`Here are your ${type}`}
        ></textarea>
      </div>
      <Footer />
    </div>
  );
};

export default Similar;
