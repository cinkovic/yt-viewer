import React, { useState } from 'react';
import { extractVideoId } from '../../services/videoService';
import './VideoInput.scss';

const VideoInput = ({ onSubmit, onShowAlert }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    const videoId = extractVideoId(inputValue);
    if (videoId) {
      onSubmit(videoId);
      setInputValue('');
    } else {
      onShowAlert('Please enter a valid YouTube URL.');
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter YouTube video link.."
        aria-label="YouTube video link input"
      />
      {inputValue && (
        <button 
          className="clear-button" 
          onClick={handleClear}
          aria-label="Clear input"
        >
          Clear
        </button>
      )}
      <button 
        className="submit-button" 
        onClick={handleSubmit}
        aria-label="Watch video"
      >
        Watch
      </button>
    </div>
  );
};

export default VideoInput; 