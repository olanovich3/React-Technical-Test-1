import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { PageContexProvider } from './Context/PagesContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Movies from './Pages/Movies';
import Series from './Pages/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageContexProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>🤡🤡🤡🤡🤡🤡🤡👹👹👹🤕🤕🤕🤕🤕🤕🤕</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageContexProvider>
  </React.StrictMode>,
);
