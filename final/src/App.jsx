import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Timeline from "./pages/Timeline";
import Team from "./pages/Team";
import MPage from "./pages/mpage";
import Dashboard from "./components/Dashboard";
import ProjectImportance from "./components/ProjectImportance";

const Layout = ({ showWelcome }) => {
  const location = useLocation();
  const hideSidebar = location.pathname === "/team" || showWelcome; // Hide Sidebar on Team & MPage
  const hideNavbar = showWelcome; // Hide Navbar only on MPage
  const showProjectImportance = location.pathname === "/" && !showWelcome; // Only show on Home after Welcome

  return (
    <>
      {!hideNavbar && <Navbar />} {/* Hide Navbar on MPage */}

      <div style={{ display: "flex" }}>
        {!hideSidebar && <Sidebar />} {/* Hide Sidebar on Team & MPage */}

        <div style={{ flex: 1, padding: "20px", marginLeft: hideSidebar ? "0" : "250px" }}>
          <Routes>
            <Route path="/team" element={<Team />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/*" element={showWelcome ? <MPage /> : <Dashboard />} />
          </Routes>

          {/* Show ProjectImportance ONLY on Home (/) AFTER the Welcome Screen */}
          {showProjectImportance && <ProjectImportance />}
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Layout showWelcome={showWelcome} />
    </Router>
  );
};

export default App;
