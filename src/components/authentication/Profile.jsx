import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Signin.css"


export const Profile = ({setPageTitle}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    setPageTitle('Profile');
  },[])

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};
