import React from "react";
import "../assets/styles/footer.css";
import "../assets/styles/global.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="flex-row footer-links">
          <li><a href="#terms">Terms</a></li>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
        <div className="footer-spacer" />
        <ul className="flex-row social-media-icons">
          <li>
          <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
