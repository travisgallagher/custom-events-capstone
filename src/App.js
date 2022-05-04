import './App.css';
import { Link } from "react-router-dom";
import { NavBar } from './components/navigation';
import Login from './components/authentication/Login';
import LogoutButton from './components/authentication/Logout';
import Profile from './components/authentication/Profile'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? 
    <div className="App-header">
      <NavBar/>
      <LogoutButton />
      <Profile />

    </div>
    : <Login />
  );
}

export default App;
