import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
//after installing we have to check with below import then only all links will get visible 
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  {/* we have to give app inside the browser router then everything we have to write in app javscript file */}
    </BrowserRouter>
    
  </React.StrictMode>
);

