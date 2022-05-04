import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from './components/events';
import Employees from './components/employees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/events" element={<Events />}/>
          <Route path="/employees" element={<Employees />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
