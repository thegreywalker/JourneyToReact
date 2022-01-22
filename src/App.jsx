import React from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
    const ctx = React.useContext(AuthContext);

    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn ? <Login /> : <Home />}
            </main>
        </React.Fragment>
    );
}

export default App;
