import React from "react";
import BarCharts from "../Charts/BarCharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import "./Details.css";

const Details = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 iconContent">
            <span>
              <FontAwesomeIcon icon={faGauge} />
              Dashboard
            </span>
            <span>
              <FontAwesomeIcon icon={faGauge} />
              Lorem ipsum
            </span>
            <span>
              <FontAwesomeIcon icon={faGauge} />
              Dashboard
            </span>
          </div>
          <div className="col-sm">
            <div className="row">
              <div className="col-sm-6">
                <p>To do graphique</p>
              </div>
              <div className="col-sm-6">
                <p>To do graphique</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>To do graphique</p>
              </div>
              <div className="col-sm-6">
                <p>To do graphique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
