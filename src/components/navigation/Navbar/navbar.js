import React from "react";
import "./navbar.css";
import GoogleLogin from "react-google-login";
import logo from "/Users/juancgmz/Documents/GitHub/ViajaTec/src/assets/icons/legoTemp.png"

const responseGoogle = (response) => {
  console.log(response);
}

export default function Navbar() {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name" id="myoutercontainer">
          <img src={logo} alt="logo" width="50" height="50"></img>
            <a id="myinnercontainer">ViajaTec</a>
        </a>

        <button className="hamburger">
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Contacto</a>
            </li>
            <li>
              <a href="/map">Rutas</a>
            </li>
            <li>
              <a href="/rules">Reglamento</a>
            </li>
            <li>
            <GoogleLogin
              clientId="937385898671-tfhhoqbhfn098182js64lseo6aoh7n1r.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </li>
          </ul>
        </div>
      </nav>
    );
  }