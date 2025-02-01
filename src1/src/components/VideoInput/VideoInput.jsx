import { useState } from 'react';
import PropTypes from 'prop-types';
import './VideoInput.scss';

const VideoInput = ({ onSubmit, onShowAlert }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Extract video ID from various YouTube URL formats
      let videoId = inputValue;
      
      if (inputValue.includes('youtube.com') || inputValue.includes('youtu.be')) {
        const url = new URL(inputValue);
        if (inputValue.includes('youtube.com')) {
          videoId = url.searchParams.get('v');
        } else {
          videoId = url.pathname.slice(1);
        }
      }

      if (!videoId) {
        onShowAlert('Invalid YouTube URL or ID');
        return;
      }

      onSubmit(videoId);
      setInputValue('');
    } catch {
      onShowAlert('Invalid YouTube URL or ID');
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter YouTube URL or video ID"
      />
      {inputValue && (
        <button
          type="button"
          className="clear-button"
          onClick={() => setInputValue('')}
        >
          Clear
        </button>
      )}
      <button type="submit" className="submit-button">
        Watch
      </button>
    </form>
  );
};

VideoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onShowAlert: PropTypes.func.isRequired,
};

export default VideoInput; 