import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import "./LoginStyles.css"

const Login = () => {
    const {loginWithRedirect} = useAuth0(); 

    return (
        <div className="login">
        <div className="login-container">
            <img src="https://user-images.githubusercontent.com/92351358/166590848-73498ef0-d422-489a-a1a1-00304b2b9b47.png"/>
            <hr />
            <button onClick={() => loginWithRedirect()}>Sign In</button>
        </div>
        </div>
        )
}

export default Login