import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          CS — Ticket System
        </div>

        <div className="nav-right">
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