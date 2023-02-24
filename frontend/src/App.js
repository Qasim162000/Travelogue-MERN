import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/UI/Navbar";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Login />} />
        <Route path="/about" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
