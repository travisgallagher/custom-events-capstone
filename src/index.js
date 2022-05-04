// @ts-nocheck
import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from './components/events';
import Employees from './components/employees';
import LoginButton from './components/authentication/Login'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider 
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}>
    {console.log(process.env.REACT_APP_TEST)}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/events" element={<Events />}/>
          <Route path="/employees" element={<Employees />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
