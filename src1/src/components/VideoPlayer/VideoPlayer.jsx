import PropTypes from 'prop-types';
import './VideoPlayer.scss';

const VideoPlayer = ({ videoId, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="video-popup" onClick={onClose}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoPlayer; 