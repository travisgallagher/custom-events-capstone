// @ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { BsList, BsX, BsFillPeopleFill, BsFillCalendarEventFill } from 'react-icons/bs';
import { AiFillDashboard,  } from 'react-icons/ai';
import { FaMoneyBillAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";


export const NavBar = () => {
    
    const [toggle, setToggle] = useState(true); 
    const { logout } = useAuth0();
    const { user } = useAuth0();
    const navigate = useNavigate();

  return (
    <div className="nav-bar">
    <BsList size={35} fill="black" onClick={() => setToggle(!toggle)} style={{position: "absolute", left:"12px", top:"12px", cursor: "pointer"}}/>
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

                <div className="link" onClick={() => navigate("/")}>
                    <AiFillDashboard />
                    <h6>Dashboard</h6>
                </div>

                <div className="link" onClick={() => navigate("/events")}>
                    <BsFillCalendarEventFill />
                    <h6>Events</h6>
                </div>

                <div className="link" onClick={() => navigate("/employees")}>
                    <BsFillPeopleFill />
                    <h6>Employees</h6>
                </div>

                <div className="link" onClick={() => navigate("/payroll")}>
                    <FaMoneyBillAlt />
                    <h6>Payroll</h6>
                </div>

                <div className="link" onClick={() => logout({ returnTo: window.location.origin })}>
                    <FaSignOutAlt />
                    <h6>Sign Out</h6>
                </div>
            </div>
        </div>
    </div>
  );
};