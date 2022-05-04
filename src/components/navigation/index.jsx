import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BsList, BsX, BsCalendar4Event, BsFillPeopleFill } from 'react-icons/bs';
import { AiFillDashboard, AiOutlineLogout } from 'react-icons/ai';


export const NavBar = () => {

    const [toggle, setToggle] = useState(true); 
    let userName = "Travis Gallagher"
  return (
    <div className="nav-bar">
    <BsList fill="black" onClick={() => setToggle(!toggle)} style={{position: "absolute", left:"12px", top:"12px", cursor: "pointer"}}/>
        <div className={`nav ${!toggle && "hidden"}`}>
            <BsX 
                style={{
                    position: "absolute",
                    right:"12px",
                    top: "12px",
                    cursor: "pointer"
                }}
                onClick={() => setToggle(!toggle)}
                size={15}
                fill="black"
            />
            <div className="navHeader">
                <span></span><h5>{userName}</h5>
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

                <div className="link">
                    <AiOutlineLogout />
                    <h6>Sign Out</h6>
                </div>
            </div>
        </div>
    </div>
  );
};