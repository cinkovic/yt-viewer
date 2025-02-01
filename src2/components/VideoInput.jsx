import React, { useState, useEffect } from 'react';
import { useVideo } from '../context/VideoContext';

function VideoInput() {
  const [inputValue, setInputValue] = useState('');
  const { saveVideo } = useVideo();

  useEffect(() => {
    const clearButton = document.getElementById('clearButton');
    if (clearButton) {
      clearButton.style.display = inputValue ? 'inline-flex' : 'none';
    }
  }, [inputValue]);

  const handleSubmit = async () => {
    const success = await saveVideo(inputValue);
    if (success) {
      setInputValue('');
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div id="inputForm" className="beta-version">
      <input
        type="text"
        id="userInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter YouTube video link.."
        aria-label="YouTube video link input"
      />
      <button id="clearButton" onClick={handleClear} aria-label="Clear input">
        Clear
      </button>
      <button id="submitButton" onClick={handleSubmit} aria-label="Watch video">
        Watch
      </button>
    </div>
  );
}

export default VideoInput; 