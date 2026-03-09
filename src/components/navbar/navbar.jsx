import { useState } from "react";
import "./navbar.css";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          CS — Ticket System
        </div>

        {/* Hamburger */}
        <div 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>

          <button className="new-ticket-btn">
            + New Ticket
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;