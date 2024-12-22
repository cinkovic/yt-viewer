import React from 'react';
import './Alert.scss';

const Alert = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="custom-alert">
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert; 