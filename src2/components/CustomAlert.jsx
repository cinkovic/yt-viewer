import React from 'react';
import { useVideo } from '../context/VideoContext';

function CustomAlert() {
  const { alert, closeAlert } = useVideo();

  if (!alert.show) return null;

  return (
    <div id="customAlert" className="custom-alert" style={{ display: 'block' }}>
      <div className="alert-content">
        <p id="alertMessage">{alert.message}</p>
        <button onClick={closeAlert}>OK</button>
      </div>
    </div>
  );
}

export default CustomAlert; 