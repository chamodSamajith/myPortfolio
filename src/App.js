import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import EducationPage from "./components/pages/EducationPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import ExperiencePage from "./components/pages/ExperiencePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
