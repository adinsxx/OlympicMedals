
import React from "react";
const Medal = (props) =>
  <div className="medals">
    {props.name} Medals: {country[props.name]}
    <button onClick={() => onIncrement(country.id, props.name)}>+</button>
    <button
      disabled={country[props.name] === 0}
      onClick={() => onSubtract(country.id, props.name)}
    >
    </button>
  </div>;

export default Medal;
