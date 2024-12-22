import React, { useState, useEffect, useCallback } from 'react';
import VideoInput from './components/VideoInput/VideoInput';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoHistory from './components/VideoHistory/VideoHistory';
import Alert from './components/Alert/Alert';
import KeyboardShortcuts from './components/KeyboardShortcuts/KeyboardShortcuts';
import { getVideoLinks, getVideoTitles } from './services/videoService';
import { setCookie, trimCookie } from './utils/cookieUtils';
import './App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [alert, setAlert] = useState({ message: '', isVisible: false });

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const videoLinks = await getVideoLinks();
      setVideos(videoLinks);
    } catch (error) {
      console.error('Error loading videos:', error);
      handleShowAlert('Error loading video history');
    }
  };

  const handleVideoSubmit = async (videoId) => {
    try {
      const titles = await getVideoTitles([videoId]);
      const newVideo = {
        id: videoId,
        title: titles[videoId],
        thumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`
      };

      const updatedVideos = [newVideo, ...videos.filter(v => v.id !== videoId)];
      setVideos(updatedVideos);

      // Save to localStorage and cookie
      localStorage.setItem('videoLinks', JSON.stringify(updatedVideos));
      const cookieLinks = trimCookie(updatedVideos);
      setCookie('videoLinks', JSON.stringify(cookieLinks), 30);

      setCurrentVideoId(videoId);
      setIsPlayerVisible(true);
    } catch (error) {
      console.error('Error submitting video:', error);
      handleShowAlert('Error adding video');
    }
  };

  const handleVideoDelete = async (videoId) => {
    try {
      const updatedVideos = videos.filter(v => v.id !== videoId);
      setVideos(updatedVideos);

      localStorage.setItem('videoLinks', JSON.stringify(updatedVideos));
      const cookieLinks = trimCookie(updatedVideos);
      setCookie('videoLinks', JSON.stringify(cookieLinks), 30);
    } catch (error) {
      console.error('Error deleting video:', error);
      handleShowAlert('Error deleting video');
    }
  };

  const handleShowAlert = (message) => {
    setAlert({ message, isVisible: true });
  };

  const handleCloseAlert = () => {
    setAlert({ message: '', isVisible: false });
  };

  const handleEscape = useCallback(() => {
    if (isPlayerVisible) {
      setIsPlayerVisible(false);
    } else if (alert.isVisible) {
      handleCloseAlert();
    }
  }, [isPlayerVisible, alert.isVisible]);

  return (
    <div className="app">
      <KeyboardShortcuts onEscape={handleEscape} />
      <VideoInput 
        onSubmit={handleVideoSubmit} 
        onShowAlert={handleShowAlert} 
      />
      <VideoHistory 
        videos={videos}
        onPlay={(videoId) => {
          setCurrentVideoId(videoId);
          setIsPlayerVisible(true);
        }}
        onDelete={handleVideoDelete}
      />
      <VideoPlayer 
        videoId={currentVideoId}
        isVisible={isPlayerVisible}
        onClose={() => setIsPlayerVisible(false)}
      />
      <Alert 
        message={alert.message}
        isVisible={alert.isVisible}
        onClose={handleCloseAlert}
      />
    </div>
  );
};

export default App; 