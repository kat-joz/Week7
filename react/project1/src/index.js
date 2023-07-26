import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from './homepage';
import Team from './team';
import Services from './services';
import AboutUs from './aboutus';
import Footer from './footer';
import WebData from './webdata';
import Comments from './comments';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1><center> Welcome to Nationwide </center></h1>
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/aboutus"> About us </Link></li>
        <li><Link to="/services"> Services </Link></li>
        <li><Link to="/myteam"> Team </Link></li>
        <li><Link to="/comments"> Comments </Link></li>
        <li><Link to="/commentsByPost"> Comments by post </Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/myteam" element={<Team/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/comments" element={<WebData/>} />
      <Route path="/commentsByPost" element={<Comments/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
