import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer = ({ videoId, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="video-popup" onClick={onClose}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?playlist=${videoId}&autoplay=1&iv_load_policy=3&loop=1&start=`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        allow="autoplay"
      />
    </div>
  );
};

export default VideoPlayer; 