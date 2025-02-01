import React from 'react';
import { useVideo } from '../context/VideoContext';

function VideoPopup() {
  const { popupVideo, closeVideo } = useVideo();

  if (!popupVideo) return null;

  return (
    <div 
      className="popup" 
      id="popup"
      role="dialog" 
      aria-label="Video player"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeVideo();
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
  );
}

export default VideoPopup; 