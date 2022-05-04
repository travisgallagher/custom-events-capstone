// @ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { BsList, BsX, BsCalendar4Event, BsFillPeopleFill } from 'react-icons/bs';
import { AiFillDashboard, AiOutlineLogout } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from '../authentication/Profile'


export const NavBar = () => {
    
    const [toggle, setToggle] = useState(true); 
    const { logout } = useAuth0();
    const { user } = useAuth0();
    const navigate = useNavigate(); 

  return (
    <div className="nav-bar">
    <BsList size={35} fill="white" onClick={() => setToggle(!toggle)} style={{position: "absolute", left:"12px", top:"12px", cursor: "pointer"}}/>
        <div className={`nav ${!toggle && "hidden"}`}>
            <BsX style={{ position: "absolute", right:"12px", top: "12px", cursor: "pointer" }}
                onClick={() => setToggle(!toggle)}
                size={15}
                fill="black"
            />
            <div className="navHeader" onClick={() => navigate("/profile")}>
                <img className="profile-pic" src={user.picture} alt={user.name} /><h5>{user.name}</h5>
            </div>

            <div className="links">

                <div className="link">
                    <AiFillDashboard />
                    <Link to="/" />
                    <h6>Dashboard</h6>
                </div>

                <div className="link">
                    <BsCalendar4Event />
                    <Link to="/events"/>
                    <h6>Events</h6>
                </div>

                <div className="link">
                    <BsFillPeopleFill />
                    <Link to="/employees" />
                    <h6>Employees</h6>
                </div>

                <div className="link" onClick={() => logout({ returnTo: window.location.origin })}>
                    <AiOutlineLogout />
                    <h6>Sign Out</h6>
                </div>
            </div>
        </div>
    </div>
  );
};