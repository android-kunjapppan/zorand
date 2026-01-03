import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner max-width">
        <div>
          <h3>Zorand</h3>
          <p>Elevating brands through innovative digital marketing strategies.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">SEO</a></li>
            <li><a href="#services">Social Media</a></li>
            <li><a href="#services">PPC</a></li>
            <li><a href="#services">Content</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      <small>© 2025 Zorand. All rights reserved.</small>
    </footer>
  );
};

export default Footer;