import { useState } from 'react';
import { extractVideoId } from '../utils/videoUtils';
import '../styles/components/SimpleVideoInput.css';

function SimpleVideoInput() {
  const [inputValue, setInputValue] = useState('');
  const [popupVideo, setPopupVideo] = useState(null);

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
      <div className="input-form simple-version">
        <input
          type="text"
          className="input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter YouTube video link.."
          aria-label="YouTube video link input"
        />
        <div className="button-container">
          {inputValue && (
            <button 
              className="btn btn-secondary"
              onClick={handleClear} 
              aria-label="Clear input"
            >
              Clear
            </button>
          )}
          <button 
            className="btn btn-primary"
            onClick={handleSubmit} 
            aria-label="Watch video"
          >
            Watch
          </button>
        </div>
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
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${popupVideo}?playlist=${popupVideo}&autoplay=1&iv_load_policy=3&loop=1&start=`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          />
        </div>
      )}
    </>
  );
}

export default SimpleVideoInput; 