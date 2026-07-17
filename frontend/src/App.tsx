import { Link, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { doSignOut } from "./auth/auth";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Stats from "./pages/Stats";
import Discover from "./pages/Discover"
import Login from "./pages/Login";
import Register from "./pages/Register"
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  document.title = "Concert Companion";

  const location = useLocation();

  const hideNav = 
    location.pathname === "/login" ||
    location.pathname === "/register";

  const { userLoggedIn, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await doSignOut();
    } 
    catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <div className="app">
      {!hideNav && (
        <nav className="nav">
          {!userLoggedIn ? (
            <>
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#community">Community</a>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              <Link to="/diary">Diary</Link>
              <Link to="/stats">Stats</Link>
              <Link to="/discover">Discover</Link>

              <button onClick={handleLogout} className="nav-link-btn">
                Logout
              </button>
            </>
          )}
        </nav>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/diary"
            element={
              <ProtectedRoute>
                <Diary />
              </ProtectedRoute>
            }
          />

          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats />
              </ProtectedRoute>
            }
          />

          <Route
            path="/discover"
            element={
              <ProtectedRoute>
                <Discover />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

    {!hideNav && (
      <footer className="footer">
        Made with ❤️ by DN
      </footer>
    )}
    </div>
  );
}

export default App;