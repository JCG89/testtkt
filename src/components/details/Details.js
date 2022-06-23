import React from "react";
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
        </div>
        <div className="row">
          <div className="col-sm2"></div>
        </div>
      </div>
    </>
  );
};
export default Details;
