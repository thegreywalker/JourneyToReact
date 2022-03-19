import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.main}>
        {children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
