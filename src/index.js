/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import './index.css'

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Use ReactDOM.createRoot to create a root
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
