import React from "react";
import './navStyle.css'

const Footer = () => (
  <div className="footer-parent">
    <div className="footer">
      &copy; {new Date().getFullYear()} Copyright: <a href="/" className="noStyle"> ViajaTec </a>
    </div>
  </div>
  
);

export default Footer;