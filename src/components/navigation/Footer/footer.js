import React from "react";
import './navStyle.css'

const Footer = () => (
  <div className="footer Center">
    &copy; {new Date().getFullYear()} Copyright: <a href="/" className="noStyle"> ViajaTec </a>
  </div>
);

export default Footer;