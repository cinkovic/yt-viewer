import { useVideo } from '../context/VideoContext';
import '../styles/components/VideoPopup.css';

function VideoPopup() {
  const { popupVideo, closeVideo } = useVideo();

  if (!popupVideo) return null;

  return (
    <div 
      className="popup" 
      role="dialog" 
      aria-label="Video player"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeVideo();
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
  );
}

export default VideoPopup; 