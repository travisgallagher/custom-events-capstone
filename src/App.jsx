// @ts-nocheck
import React, { useState} from 'react';
import { NavBar } from './components/navigation';
import Signin from './components/authentication/Signin';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from './components/dashboard';
import {Events} from './components/events';
import {Employees} from './components/employees';
import {Profile} from './components/authentication/Profile'
import {Payroll} from './components/payroll'
import Logo from './components/logo';
import { BsList } from 'react-icons/bs';
import './App.css';

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const [toggle, setToggle] = useState(true); 

  return (
    isAuthenticated ? 
    <div className="App">
     <Router>
      <NavBar  toggle={toggle} setToggle={setToggle}/>
    <div className='pageHeader'>
      <BsList size={35} fill="white" onClick={() => setToggle(!toggle)} style={toggle ? {visibility:'hidden' }: { cursor: "pointer"}}/>
      <h1>{pageTitle}</h1>
      <Logo />
    </div>
    <div className='page'>
      <Routes>
        <Route exact={true} path="/" element={<Employees  setPageTitle={setPageTitle} />} />
        <Route path="/events" element={<Events setPageTitle={setPageTitle}/>}/>
        <Route path="/employees" element={<Employees setPageTitle={setPageTitle}/>}/>
        <Route path="/dashboard" element={<Dashboard setPageTitle={setPageTitle}/>}/>
        <Route path="/profile" element={<Profile setPageTitle={setPageTitle}/>}/>
        <Route path="/payroll" element={<Payroll setPageTitle={setPageTitle}/>}/>
      </Routes>
    </div>
    </Router>
    </div>
    : <Signin />
  );
}

export default App;
