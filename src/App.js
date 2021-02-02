import "./App.scss";

import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  BrowserRouter,
  Switch,
  useLocation,
} from "react-router-dom";
import Denim from "./Pages/Men/Denim";
import About from "./Pages/About";
import MainNav from "./components/MainNav/MainNav";
function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Switch>
          <Route path="/" exact render={() => <Home />} />

          <Route path="/about" exact render={() => <About />} />

          <Route path="/men/denim" exact render={() => <Denim />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
