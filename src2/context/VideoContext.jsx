import React, { createContext, useState, useContext, useEffect } from 'react';
import { getVideoTitles, extractVideoId } from '../utils/videoUtils';

const VideoContext = createContext();

export const useVideo = () => useContext(VideoContext);

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}

function trimCookie(videoLinks) {
  const MAX_COOKIE_SIZE = 3920;
  let trimmedLinks = [...videoLinks];
  while (encodeURIComponent(JSON.stringify(trimmedLinks)).length > MAX_COOKIE_SIZE) {
    trimmedLinks.pop();
  }
  return trimmedLinks;
}

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [popupVideo, setPopupVideo] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '' });

  const showAlert = (message) => {
    setAlert({ show: true, message });
  };

  const closeAlert = () => {
    setAlert({ show: false, message: '' });
  };

  const saveVideo = async (url) => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      showAlert('Please enter a valid YouTube URL.');
      return false;
    }

    const titles = await getVideoTitles([videoId]);
    const newVideo = {
      id: videoId,
      title: titles[videoId] || 'Unknown Title',
      thumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`
    };

    setVideos(prev => {
      const newVideos = [newVideo, ...prev.filter(v => v.id !== videoId)];
      // Save to both localStorage and cookie
      localStorage.setItem('videoLinks', JSON.stringify(newVideos));
      const cookieLinks = trimCookie(newVideos);
      setCookie('videoLinks', JSON.stringify(cookieLinks), 30);
      return newVideos;
    });

    setPopupVideo(videoId);
    return true;
  };

  const deleteVideo = (videoId) => {
    setVideos(prev => prev.filter(video => video.id !== videoId));
  };

  const playVideo = (videoId) => {
    setPopupVideo(videoId);
  };

  const closeVideo = () => {
    setPopupVideo(null);
  };

  useEffect(() => {
    // Load from both localStorage and cookies on init
    const loadVideos = async () => {
      let linksLocalStorage = JSON.parse(localStorage.getItem('videoLinks')) || [];
      let linksCookie = JSON.parse(getCookie('videoLinks') || '[]');

      // Combine and deduplicate
      const uniqueLinks = new Map([...linksLocalStorage, ...linksCookie].map(video => [video.id, video]));
      setVideos(Array.from(uniqueLinks.values()));
    };
    loadVideos();
  }, []);

  return (
    <VideoContext.Provider value={{
      videos,
      popupVideo,
      alert,
      saveVideo,
      deleteVideo,
      playVideo,
      closeVideo,
      showAlert,
      closeAlert
    }}>
      {children}
    </VideoContext.Provider>
  );
} 