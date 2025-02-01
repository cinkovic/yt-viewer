const BASE_URL = 'https://www.youtube.com';

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

export const extractVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?|u\/\w+\/|shorts\/|watch\?(?:.*&)?v=))|youtu\.be\/)([^#&?]*).*/i);
  return match ? match[1] : null;
}; 