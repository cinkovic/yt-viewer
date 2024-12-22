import { getCookie } from '../utils/cookieUtils';

const BASE_URL = 'https://www.youtube.com';

export const extractVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?|u\/\w+\/|shorts\/|watch\?(?:.*&)?v=))|youtu\.be\/)([^#&?]*).*/i);
  return match ? match[1] : null;
};

export const getVideoTitles = async (videoIds) => {
  const titles = {};
  const requests = videoIds.map(async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/oembed?url=${BASE_URL}/watch?v=${id}&format=json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      titles[id] = data.title;
    } catch (error) {
      console.error(`Error fetching title for video ${id}:`, error);
      titles[id] = 'Error fetching title';
    }
  });
  await Promise.all(requests);
  return titles;
};

export const getVideoLinks = async () => {
  let linksLocalStorage = JSON.parse(localStorage.getItem('videoLinks')) || [];
  let linksCookie = JSON.parse(getCookie('videoLinks') || '[]');

  if (typeof linksCookie[0] === 'string') {
    linksCookie = linksCookie.map(id => ({ id, title: '', thumbnail: '' }));
  }
  if (typeof linksLocalStorage[0] === 'string') {
    linksLocalStorage = linksLocalStorage.map(id => ({ id, title: '', thumbnail: '' }));
  }

  const uniqueLinks = new Map([...linksLocalStorage, ...linksCookie].map(video => [video.id, video]));
  return Array.from(uniqueLinks.values());
}; 