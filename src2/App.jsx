import React from 'react';
import VideoInput from './components/VideoInput';
import VideoHistory from './components/VideoHistory';
import VideoPopup from './components/VideoPopup';
import CustomAlert from './components/CustomAlert';
import { VideoProvider } from './context/VideoContext';
import './styles/App.css';

function App() {
  return (
    <VideoProvider>
      <VideoInput />
      <VideoHistory />
      <VideoPopup />
      <CustomAlert />
    </VideoProvider>
  );
}

export default App; 