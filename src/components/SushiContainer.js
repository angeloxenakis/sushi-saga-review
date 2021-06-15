import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi.js'

function SushiContainer(props) {
  const [sushiNumber, setSushiNumber] = useState(4)

  const addFourSushi = () => {
    setSushiNumber(sushiNumber + 4)
  }
  
  return (
    <div className="belt">
      {props.sushiCollection.slice(sushiNumber - 4, sushiNumber).map(sushi => <Sushi key={sushi.id} sushi={sushi} buySushi={props.buySushi}/>)}
      <MoreButton addFourSushi={addFourSushi}/>
    </div>
  );
}

export default SushiContainer;
