import React from 'react';
import { useVideo } from '../context/VideoContext';

function VideoHistory() {
  const { videos, playVideo, deleteVideo } = useVideo();

  return (
    <ul id="history" aria-label="Video history">
      {videos.map((video) => (
        <li key={video.id} data-video-id={video.id}>
          <img 
            src={video.thumbnail} 
            alt="Thumbnail" 
            className="thumbnail" 
          />
          <span className="video-title">{video.title}</span>
          <div 
            className="play-icon" 
            onClick={() => playVideo(video.id)}
          />
          <div 
            className="delete-icon" 
            onClick={() => deleteVideo(video.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default VideoHistory; 