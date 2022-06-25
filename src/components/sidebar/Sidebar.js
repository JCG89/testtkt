import React from "react";
import "./Sidebar.css";
import { useState, useEffect, useMemo } from "react";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGauge,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [entreprisesData, setEprisesData] = useState([]);
  const [sectorList, setSectorList] = useState([]); //state for sector list
  const [selectedSector, setSelectedSector] = useState(); // state for selected sector

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://test.wertkt.com/api/biz/");

      setEprisesData(result.data);
      setSectorList(result.data);
    };
    fetchData();
  }, []);
  //Duplicate removal step
  const entrepriseDataBis = [];

  entreprisesData.map((item) => {
    entrepriseDataBis.push(item.sector);
  });
  const newsectorTab = [...new Set(entrepriseDataBis)];

  //Function for filter
  const getFilteredList = () => {
    if (!selectedSector) {
      return sectorList;
    }

    return sectorList.filter((sector) => sector.sector === selectedSector);
  };
  const filteredList = useMemo(getFilteredList, [selectedSector, sectorList]);
  console.log(filteredList);

  //handler for select
  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h3 className="text-center mb-2">Welcome on Tkt Dashboard</h3>
        <div className="row">
          <div className="col-sm-2 iconContent">
            <span>
              <FontAwesomeIcon icon={faGauge} className="gauge" />
              DASHBOARD
            </span>
            <span>
              <FontAwesomeIcon icon={faBell} className="gauge" /> LOREM IPSUM
            </span>
            <span>
              <FontAwesomeIcon icon={faQuestionCircle} className="gauge" />
              LOREM IPSUM
            </span>
          </div>
          <div className="col-sm" id="form-select">
            <select
              onChange={handleSectorChange}
              className="form-select"
              aria-label="text"
            >
              <option selected aria-required="true">
                Sector
              </option>
              {newsectorTab //Array without sector duplicates
                .map((sector) => {
                  return (
                    <>
                      <option value={sector}>{sector}</option>
                    </>
                  );
                })
                .sort()}
            </select>
            <select class="form-select">
              <option selected>Company</option>
              {filteredList.map((item) => {
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
                {filteredList //filtered array
                  .map((item) => {
                    //destructuring
                    const name = item.name;
                    const siren = item.siren;
                    const selectedSector = item.sector;
                    return (
                      <tr>
                        <td>{name}</td>
                        <td>{siren}</td>
                        <Link to="/details" className="btn btn-success">
                          <td>{selectedSector}</td>
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
