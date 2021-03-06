import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./index.css"

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className='logo'>
        <img src="https://user-images.githubusercontent.com/92351358/166590848-73498ef0-d422-489a-a1a1-00304b2b9b47.png" alt="Custom Events Logo"  />
    </div>
  )
}

export default Logo