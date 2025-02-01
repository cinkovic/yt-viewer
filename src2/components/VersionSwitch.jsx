import React from 'react';

function VersionSwitch() {
  const isBeta = window.location.pathname.includes('beta');
  const href = isBeta ? '/' : '/beta';
  
  return (
    <a href={href} id="bottomButton" aria-label={`Switch to ${isBeta ? 'simple' : 'beta'} version`}>
      <img 
        src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png" 
        alt="Lock Closed" 
        className="lock-closed"
      />
      <img 
        src="https://img.icons8.com/material-outlined/24/ffffff/unlock--v1.png" 
        alt="Unlock" 
        className="lock-open"
      />
    </a>
  );
}

export default VersionSwitch; 