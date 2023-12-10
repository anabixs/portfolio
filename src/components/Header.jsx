import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <span className="navbar-brand">
          <div className="box"></div>
          <h3>
            <b>Vladyslav Kolomiiets</b>
          </h3>{" "}
          / Junior FrontEnd Developer
        </span>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/portfolio">
            About me
          </Link>
          <Link className="nav-item nav-link" to="/portfolio/resume">
            Resume
          </Link>
          <Link className="nav-item nav-link" to="/portfolio/projects">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
