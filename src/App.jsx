import { Switch, Redirect, Route } from "react-router-dom";
import { Home, AllOrders, MyAccount } from "./pages";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/allOrders">
            <AllOrders />
          </Route>
          <Route path="/myaccount/:id">
            <MyAccount />
          </Route>
        </Switch>
      </Layout>
   
  );
}
export default App;
