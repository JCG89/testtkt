import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [entreprises, setEntreprises] = useState([]);

  return (
    <>
      <Sidebar />
    </>
  );
};
export default Home;
