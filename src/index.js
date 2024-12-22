import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'react-dom/client' package
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root
root.render(
  <React.StrictMode>
   
    
    <App />
    
  </React.StrictMode>
);
