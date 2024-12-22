import React from 'react';
import VideoHistoryItem from '../VideoHistoryItem/VideoHistoryItem';
import './VideoHistory.scss';

const VideoHistory = ({ videos, onPlay, onDelete }) => {
  return (
    <ul className="video-history" aria-label="Video history">
      {videos.map((video) => (
        <VideoHistoryItem
          key={video.id}
          video={video}
          onPlay={() => onPlay(video.id)}
          onDelete={() => onDelete(video.id)}
        />
      ))}
    </ul>
  );
};

export default VideoHistory; 