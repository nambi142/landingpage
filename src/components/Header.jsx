
import { FaPython } from "react-icons/fa";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "../css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleNavigation = (event, targetId) => {
    event.preventDefault();

    const target = document.getElementById(targetId);

    if (target) {
      const headerHeight =
        document.querySelector(".site-header")?.offsetHeight || 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${targetId}`);
    }

    closeMenu();
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Why Learn", id: "benefits" },
    { label: "What You'll Learn", id: "learning" },
    { label: "Workshop Details", id: "details" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header className="site-header">
      <div className="header-container">

        <a
          href="#home"
          className="brand"
          onClick={(event) => handleNavigation(event, "home")}
        >
          <FaPython className="brand-icon" />

          <span>
            <strong>
              Python <span>AI</span>
            </strong>
            <small>Learn. Build. Grow.</small>
          </span>
        </a>

        <nav
          id="header-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavigation(event, item.id)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#registration"
            className="header-cta"
            onClick={(event) => handleNavigation(event, "registration")}
          >
            Register Now <FiArrowUpRight />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          type="button"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Header;
