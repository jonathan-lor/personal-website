import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";


function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;