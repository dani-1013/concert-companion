import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Concerts from "./pages/Concerts";
import Login from "./pages/Login";

function App() {
  document.title = "Concert Companion";
  
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/concerts">Concerts</Link>
        <Link to="/login">Login</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="footer">
        Made with ❤️ by DN
      </footer>
    </div>
  );
}

export default App;