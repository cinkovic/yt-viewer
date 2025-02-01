import { useEffect } from 'react';
import PropTypes from 'prop-types';

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

KeyboardShortcuts.propTypes = {
  onEscape: PropTypes.func.isRequired,
};

export default KeyboardShortcuts; 