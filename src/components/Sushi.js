import React, { useState } from "react";

function Sushi(props) {
  // We don't need to keep track of eaten state if there is an eaten value on the sushi itself
  // const [eaten, setEaten] = useState(false)

  const eatSushi = () => {
    props.buySushi(props.sushi)
    // setEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {props.sushi.eaten ? null : (
          <img
            src={props.sushi.img_url}
            alt={props.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
