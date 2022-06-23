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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://test.wertkt.com/api/biz/");

      setEprisesData(result.data);
    };
    fetchData();
  }, []);
  const entrepriseDataBis = [];

  entreprisesData.map((item) => {
    entrepriseDataBis.push(item.sector);
  });
  const newsectorTab = [...new Set(entrepriseDataBis)];

  const filtered = () => {
    entreprisesData.map((item) => {
      if (item === item.sector) {
        return item.sector;
      }
      console.log(item.sector);
    });
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center mb-2">Welcome on Tkt Dashboard</h3>
        <div className="row">
          <div className="col-sm-2 iconContent">
            <span>
              <FontAwesomeIcon icon={faGauge} className="Gauge" />
              Dashboard
            </span>
            <span>
              <FontAwesomeIcon icon={faGauge} className="Gauge" />
              Lorem ipsum
            </span>
            <span>
              <FontAwesomeIcon icon={faGauge} className="Gauge" />
              Dashboard
            </span>
          </div>
          <div className="col-sm" id="form-select">
            <select
              className="form-select"
              aria-label="Disabled select example"
            >
              <option selected aria-required="true">
                Sector
              </option>
              {newsectorTab
                .map((sector) => {
                  return (
                    <>
                      <option value="1">{sector}</option>
                    </>
                  );
                })
                .sort()}
            </select>
            <select class="form-select">
              <option selected>Company</option>
              {entreprisesData.map((item) => {
                return (
                  <>
                    // <option value="1">{item.name}</option>
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
                {entreprisesData
                  .map((item) => {
                    //destructuring
                    const name = item.name;
                    const siren = item.siren;
                    const sector = item.sector;
                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{siren}</td>
                        <Link to="/details" className="btn btn-success">
                          <td>{sector}</td>
                        </Link>
                      </tr>
                    );
                  })
                  .sort()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
