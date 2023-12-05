import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/Home.js";
import Projects from "./layout/Projects.js";
import Experience from "./layout/Experience.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import About from "./layout/About.js";
import ProjectShowPage from "./components/ProjectShowPage";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Router>
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects/:id" element={<ProjectShowPage />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
