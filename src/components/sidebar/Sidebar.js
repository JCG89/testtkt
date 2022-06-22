import React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

const Sidebar = () => {
  const [entreprisesData, setEprisesData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchBiz = async () => {
      const result = await axios.get("https://test.wertkt.com/api/biz/");

      setEprisesData(result.data);
      console.log(result);
    };
    fetchBiz();
  }, []);
  return (
    <>
      <div className="dashboard">
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
        <div className="section">
          <div className="selectItem">
            <select className="select">
              <option value="data">Sector</option>
            </select>
            <select className="select">
              <option value="sector">Company</option>
            </select>
          </div>

          <div className="data">
            <ul className="list-data">
              <li>COMPANY</li>
              <li>N° SIREN</li>
              <li>CATEGORY</li>
            </ul>
            {entreprisesData.map((item) => {
              return (
                <ul className="dataContent" key={item.id}>
                  <li id="dataItem">{item.name}</li>
                  <li id="dataItem">{item.siren}</li>
                  <li id="dataItem">{item.sector}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
