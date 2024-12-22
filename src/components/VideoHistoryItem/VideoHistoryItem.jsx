import React from 'react';
import './VideoHistoryItem.scss';

const VideoHistoryItem = ({ video, onPlay, onDelete }) => {
  return (
    <li className="history-item">
      <img 
        src={video.thumbnail} 
        alt="Video thumbnail" 
        className="thumbnail" 
      />
      <span className="video-title">{video.title}</span>
      <div className="play-icon" onClick={onPlay} />
      <div className="delete-icon" onClick={onDelete} />
    </li>
  );
};

export default VideoHistoryItem; 