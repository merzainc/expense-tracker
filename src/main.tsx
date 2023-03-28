import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './custom.scss';
import './index.css';

// clears the console whenever hmr updates the page
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => console.clear());
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
