import "./Footer.css";

import Xicon from "./X.svg?react";
import LinkedinIcon from "./linkedin.svg?react";
import FacebookIcon from "./facebook.svg?react";
import EmailIcon from "./email.svg?react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>CS — Ticket System</h3>
          <p>
            CS Ticket System helps support teams manage customer requests
            efficiently. Track issues, monitor ticket progress, and resolve
            problems quickly using a simple and organized dashboard.
          </p>
        </div>

        {/* Middle Columns */}
        <div className="footer-links">

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

        </div>

        {/* Social */}
        <div className="footer-social">
  <h4>Social Links</h4>

  <div className="social-item">
    <Xicon className="social-icon" />
    <span>CS — Ticket System</span>
  </div>

  <div className="social-item">
    <LinkedinIcon className="social-icon" />
    <span>@cs-ticket-system</span>
  </div>

  <div className="social-item">
    <FacebookIcon className="social-icon" />
    <span>@cs-ticket-system</span>
  </div>

  <div className="social-item">
    <EmailIcon className="social-icon" />
    <span>support@cst.com</span>
  </div>
</div>
      </div>

      <div className="footer-bottom">
        © 2025 CS — Ticket System. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;