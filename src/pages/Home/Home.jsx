import React from 'react';
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

const Home = () => {

  const [data, setData] =useState([]);
    
  useEffect(() => {
    fetch(`../../data/logements.json`)
         .then((response) => response.json()
         .then(({ surveyData }) => console.log(surveyData))
         .catch((error) => console.log(error))
     )
 }, [])

  return (
    <div>
      <Banner />
      <Card />
      <div>

      </div>
    </div>
  );
};

export default Home;
