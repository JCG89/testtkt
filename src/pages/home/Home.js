import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://test.wertkt.com/api/biz/");

      setEntreprises(result.data);
      console.log(entreprises);
    };
    fetchData();
  }, []);
  return (
    <>
      <hi className="title">Welcome on Tkt Dashboard</hi>
    </>
  );
};
export default Home;
