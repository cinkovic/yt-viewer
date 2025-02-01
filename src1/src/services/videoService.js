export const getVideoLinks = async () => {
  try {
    // Try to get videos from localStorage first
    const storedLinks = localStorage.getItem('videoLinks');
    if (storedLinks) {
      return JSON.parse(storedLinks);
    }
    return [];
  } catch (error) {
    console.error('Error getting video links:', error);
    return [];
  }
};

export const getVideoTitles = async (videoIds) => {
  try {
    // For now, return a simple object with video IDs as titles
    // In a real app, this would make an API call to YouTube
    return videoIds.reduce((acc, id) => {
      acc[id] = `Video ${id}`;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error getting video titles:', error);
    throw error;
  }
}; 