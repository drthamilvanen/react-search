import React, { useEffect, useState } from "react";
import "./count.css"


const CounterButton = (props) => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
        setCount(count + props.increamentBy);
    }
 
    // useEffect(() => {
    //   if (count === 10) alert("Reached 10");
    // }, [count]);

  
  return (
    <div>
      <button onClick={handleClick}>+</button>
      <div>{count}</div>
    </div>
  );
}

export default CounterButton;
