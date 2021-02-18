import "./App.scss";
import React from "react";

import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Denim = React.lazy(() => import("./Pages/Men/Denim"));
const About = React.lazy(() => import("./Pages/About"));
const MainNav = React.lazy(() => import("./components/MainNav/MainNav"));
const FooMain = React.lazy(() => import("./components/FooMain"));
const Checkout = React.lazy(() => import("./Pages/Checkout/Checkout"));
const Login = React.lazy(() => import("./Pages/Login"));
const Woman = React.lazy(() => import("./Pages/Woman/Woman"));
function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<p>Loading....</p>}>
          {" "}
          <MainNav />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" exact render={() => <About />} />
            <Route path="/men" exact render={() => <Denim />} />
            <Route path="/checkout" exact render={() => <Checkout />} />
            <Route path="/register" exact render={() => <Login />} />
            <Route path="/women" exact render={() => <Woman />} />
          </Switch>
          {/* <FooMain /> */}
        </React.Suspense>{" "}
      </div>
    </Router>
  );
}

export default App;
