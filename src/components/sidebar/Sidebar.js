import React from "react";
import "./Sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [entreprisesData, setEprisesData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://test.wertkt.com/api/biz/");

      setEprisesData(result.data);
      console.log(result);
    };
    fetchData();
  }, []);
  entreprisesData.map((item) => {
    const sectorOption = item.sector;
  });
  return (
    <>
      <div className="container">
        <h3 className="text-center mb-2">Welcome on Tkt Dashboard</h3>
        <div className="row">
          <div className="col-sm-2 iconContent">
            <span>
              <FontAwesomeIcon icon={faGauge} />
              Dashboard
            </span>
            <span>
              <FontAwesomeIcon icon={faGauge} />
              Dashboard
            </span>
            <span>
              <FontAwesomeIcon icon={faGauge} />
              Dashboard
            </span>
          </div>
          <div className="col-sm" id="form-select">
            <select
              className="form-select"
              aria-label="Disabled select example"
            >
              <option selected>Sector</option>
              {entreprisesData.map((item) => {
                return (
                  <>
                    <option value="1">{item.sector}</option>
                  </>
                );
              })}
            </select>
            <select class="form-select" aria-label="Disabled select example">
              <option selected>Company</option>
              {entreprisesData.map((item) => {
                return (
                  <>
                    <option value="1">{item.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="head">COMPANY</th>
                  <th className="head">N° SIREN</th>
                  <th className="head">CATEGORY</th>
                </tr>
              </thead>
              <tbody>
                {entreprisesData.map((item) => {
                  const name = item.name;
                  const siren = item.siren;
                  const sector = item.sector;
                  return (
                    <tr>
                      <td>{name}</td>
                      <td>{siren}</td>
                      <td>{sector}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
