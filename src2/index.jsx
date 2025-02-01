import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';
import SimpleApp from './SimpleApp';

// Use SimpleApp for / and App for /beta
const isSimple = !window.location.pathname.includes('beta');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {isSimple ? <SimpleApp /> : <App />}
  </React.StrictMode>
); 