import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rendez from "./pages/Rendez";
import Contact from "./pages/Contact";
import {Football} from "./pages/Football";
import {Basketball} from "./pages/Basketball";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home/>} />
          <Route path="/football" exact component={<Football/>} />
          <Route path="/basketball" exact component={<Basketball/>} />
          <Route path="/contact" exact component={<Contact/>} />
          <Route path="/rendez-vous" exact component={<Rendez/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
