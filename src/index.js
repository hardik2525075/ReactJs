import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './components/Login/Login';*/
import Login from './components/Login/Login';
import Register from "./components/Register/Register"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
