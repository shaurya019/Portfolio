import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skill } from "./components/Skill";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import {Quaification} from "./components/Quaification";
import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
      <Quaification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
