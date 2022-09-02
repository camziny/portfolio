import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./layout/Home.js"
import Projects from "./layout/Projects.js"
import Experience from "./layout/Experience.js"
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import ProjectShowPage from './components/ProjectShowPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:id" element={<ProjectShowPage />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
