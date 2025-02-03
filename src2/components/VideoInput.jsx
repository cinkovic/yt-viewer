import { useState } from 'react';
import { useVideo } from '../context/VideoContext';
import Button from './common/Button';
import '../styles/components/VideoInput.css';

function VideoInput() {
  const [inputValue, setInputValue] = useState('');
  const { saveVideo } = useVideo();

  const handleSubmit = async () => {
    const success = await saveVideo(inputValue);
    if (success) {
      setInputValue('');
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="input-form">
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
          <Button 
            variant="secondary" 
            onClick={handleClear}
            aria-label="Clear input"
          >
            Clear
          </Button>
        )}
        <Button 
          variant="primary" 
          onClick={handleSubmit}
          aria-label="Watch video"
        >
          Watch
        </Button>
      </div>
    </div>
  );
}

export default VideoInput; 