import React, { useState, useEffect } from 'react';
import { extractVideoId } from '../utils/videoUtils';

function SimpleVideoInput() {
  const [inputValue, setInputValue] = useState('');
  const [popupVideo, setPopupVideo] = useState(null);

  useEffect(() => {
    const clearButton = document.getElementById('clearButton');
    if (clearButton) {
      clearButton.style.display = inputValue ? 'inline-flex' : 'none';
    }
  }, [inputValue]);

  const handleSubmit = () => {
    const videoId = extractVideoId(inputValue);
    if (videoId) {
      setPopupVideo(videoId);
    } else {
      alert('Please enter a valid YouTube URL.');
    }
  };

  const handleClear = () => {
    setInputValue('');
    setPopupVideo(null);
  };

  return (
    <>
      <div id="inputForm" className="simple-version">
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

      {popupVideo && (
        <div 
          className="popup" 
          style={{ display: 'flex' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setPopupVideo(null);
            }
          }}
        >
          <div id="video-placeholder">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${popupVideo}?playlist=${popupVideo}&autoplay=1&iv_load_policy=3&loop=1&start=`}
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SimpleVideoInput; 