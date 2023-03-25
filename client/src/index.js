import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from './components/Music';
import Home from './components/Home';
import Communities from './components/Communities';
import ChatAnonymus from './components/chatComponent/ChatAnonymus';
import Activities from './components/Activities';
// import ChatAreas from './components/ChatAreas';
import Auth from './components/Auth/Auth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='Music' element={<Music />} />
          <Route path='Communities' element={<Communities />} />
          <Route path='ChatAnonymous' element={<ChatAnonymus />} />
          <Route path='Activities' element={<Activities />} />
          <Route path='Auth' element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
