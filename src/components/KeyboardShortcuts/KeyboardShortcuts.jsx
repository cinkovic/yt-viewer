import { useEffect } from 'react';

const KeyboardShortcuts = ({ onEscape }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);

  return null;
};

export default KeyboardShortcuts; 