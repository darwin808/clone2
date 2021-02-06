import "./App.scss";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import TopContainer1 from "./components/TopContainer1";
import { BrowserRouter as Router } from "react-router-dom";
function Home() {
  return (
    <Router>
      <div className="Home">
        <TopContainer1 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        {/* <S5Foo2 /> */}
      </div>
    </Router>
  );
}

export default Home;
