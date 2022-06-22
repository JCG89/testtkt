import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

const Sidebar = () => {
  return (
    <>
      <nav className="sidenav">
        <span className="spanItem">
          <FontAwesomeIcon icon={faGauge} className="icon" />
          Dashboard
        </span>
        <Link to="/"></Link>
        <Link to="/details"></Link>
        <span className="spanItem">
          <FontAwesomeIcon icon={faGauge} className="icon" />
          Lorem ipsum
        </span>
        <span className="spanItem">
          <FontAwesomeIcon icon={faGauge} className="icon" />
          lorem ipsum
        </span>
      </nav>
    </>
  );
};
export default Sidebar;
