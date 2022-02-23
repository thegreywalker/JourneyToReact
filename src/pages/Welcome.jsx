import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <React.Fragment>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome New User!</p>
      </Route>
    </React.Fragment>
  );
};

export default Welcome;
