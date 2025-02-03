import { useVideo } from '../context/VideoContext';
import '../styles/components/VideoHistory.css';

function VideoHistory() {
  const { videos, playVideo, deleteVideo } = useVideo();

  return (
    <ul className="history" aria-label="Video history">
      {videos.map((video) => (
        <li key={video.id} className="history-item">
          <img 
            src={video.thumbnail} 
            alt="Video thumbnail" 
            className="thumbnail" 
          />
          <span className="video-title">{video.title}</span>
          <div 
            className="play-icon" 
            onClick={() => playVideo(video.id)}
            role="button"
            aria-label="Play video"
          />
          <div 
            className="delete-icon" 
            onClick={() => deleteVideo(video.id)}
            role="button"
            aria-label="Delete video"
          />
        </li>
      ))}
    </ul>
  );
}

export default VideoHistory; 