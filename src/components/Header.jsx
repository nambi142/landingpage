import { FaPython } from "react-icons/fa";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="brand" onClick={closeMenu}>
          <FaPython className="brand-icon" />
          <span>
            <strong>Python <span>AI</span></strong>
            <small>Learn. Build. Grow.</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#benefits" onClick={closeMenu}>Why This Workshop</a>
          <a href="#learning" onClick={closeMenu}>What You'll Learn</a>
          <a href="#details" onClick={closeMenu}>Workshop Details</a>
        </nav>

        <a href="#registration" className="header-cta">
          Register Now <FiArrowUpRight />
        </a>
      </div>
    </header>
  );
}

export default Header;