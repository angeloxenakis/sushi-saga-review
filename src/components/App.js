import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiCollection, setSushiCollection] = useState([])
  const [monies, setMonies] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => setSushiCollection(sushiData.map(sushiObj => {
      return {id: sushiObj.id, name: sushiObj.name, price: sushiObj.price, img_url: sushiObj.img_url, eaten: false}
    })))
  }, [])

  // Simpler implementation that does not keep track of if the sushi is eaten already or not 
  // useEffect(() => {
  //   fetch(API)
  //   .then(res => res.json())
  //   .then(sushiData => setSushiCollection(sushiData))
  // }, [])

  const buySushi = (sushi) => {
    // console.log(sushi.eaten)
    if (sushi.eaten === false && monies >= sushi.price) {
      sushi.eaten = true
      setMonies(monies - sushi.price)
    }
  }

  return (
    <div className="app">
      <SushiContainer sushiCollection={sushiCollection} buySushi={buySushi}/>
      <Table sushiCollection={sushiCollection} monies={monies}/>
    </div>
  );
}

export default App;
