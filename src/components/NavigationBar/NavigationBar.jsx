import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import "../../App.css";
import { NavigationBarItem } from "./NavigationBarItem";

export const NavigationBar = () => {
    return (
        <div className="flex-row" style={{position: "fixed", minWidth: "100vw", zIndex: "99", background: "var(--light-text)"}}>
            <NavLink to="/" style={{marginRight: "auto",fontWeight: "400", marginLeft: "0 !important", padding: "15px 30px", background:"var(--primary-color)"}}>
                <h3 style={{color: "var(--light-text)"}}>Practice With Byron</h3>
            </NavLink>
            <div className="flex-row" style={{marginRight: "10px"}}>
                <NavigationBarItem text="Dashboard" link="/dashboard"/>
                <NavigationBarItem text="Catalog" link="/catalog"/>
                <NavigationBarItem text="Login" link="/login"/>
            </div>
        </div>
    )
}