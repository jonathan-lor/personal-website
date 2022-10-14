import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import BlogHome from "./components/Blog/BlogHome"
import CookingInCollege from "./components/Blog/CookingInCollege"
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (

    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="BlogHome" element={<BlogHome />} />
        <Route path="CookingInCollege" element={<CookingInCollege />} />
      </Routes>
    </div>
  );
}

export default App;