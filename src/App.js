// @ts-nocheck
import './App.css';
import { Link } from "react-router-dom";
import { NavBar } from './components/navigation';
import Signin from './components/authentication/Signin';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';
import Events from './components/events';
import Employees from './components/employees';
import Profile from './components/authentication/Profile'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? 
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<Events />}/>
        <Route path="/employees" element={<Employees />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
    </div>
    : <Signin />
  );
}

export default App;
