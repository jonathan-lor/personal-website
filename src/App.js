import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import BlogHome from "./components/Blog/BlogHome"
import CookingInCollege from "./components/Blog/CookingInCollege"
import { Routes, Route } from "react-router-dom";


function App() {

  return (

    <div className="App">
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