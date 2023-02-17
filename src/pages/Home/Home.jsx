import React from 'react';
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

const Home = () => {
/*
  const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch("/data/logements.json")
    .then(response => response.json())
    .then(res => setData(res))
    .then(data => {console.log(data)})
    .catch(error => console.error(error));
  
  }, []);

*/
  return (
    <div>
      <Banner />
      <Card />
    </div>
  );
};

export default Home;
