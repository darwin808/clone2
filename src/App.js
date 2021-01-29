import "./App.scss";
import Navbar1 from "./components/Navbar1";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import TopContainer1 from "./components/TopContainer1";
function App() {
  return (
    <div className="App">
      <Navbar1 />
      <TopContainer1 />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
