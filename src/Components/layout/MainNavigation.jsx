import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  let cookie = document.cookie;
  let data = cookie.split(";");
  let token = "";
  data.forEach((val) => {
    if (val.includes("token")) {
      token = val.split("=")[1];
    }
  });
  return (
    <header className={classes.header}>
      <div className={classes.logo}>PrintWithUs</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allOrders" activeClassName={classes.active}>
              All Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/myaccount/:`${token}`"  activeClassName={classes.active}>
              My Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
