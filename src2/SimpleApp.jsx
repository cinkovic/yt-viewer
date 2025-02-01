import React from 'react';
import SimpleVideoInput from './components/SimpleVideoInput';
import './styles/App.css';

function SimpleApp() {
  return (
    <>
      <SimpleVideoInput />
      <a href="index_beta.html" id="bottomButton" aria-label="Switch to beta version">
        <img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png" alt="Lock Closed" className="lock-closed" />
        <img src="https://img.icons8.com/material-outlined/24/ffffff/unlock--v1.png" alt="Unlock" className="lock-open" />
      </a>
    </>
  );
}

export default SimpleApp; 