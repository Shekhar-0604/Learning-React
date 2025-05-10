import React, { useState } from "react";

function Counter(props) {
  //const [count, setCount] = useState(0);

  function incrementCount(prop) {
    setInterval(() => {
      prop = prop + 1;
    }, 1000);
    //setCount(prop + 1);
  }
  return (
    <>
      <div>Counter Component</div>
      <button onClick={incrementCount(props.count)} type="button">
        Count {props.count}
      </button>
    </>
  );
}

export default Counter;
