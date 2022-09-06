import React from 'react'
import { useState } from 'react'

function Hook2() {

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setcount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setcount(0);
  };

  return (

    <>
      <h2>Ejemplo useCounter</h2>
      <h3>count={count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

    </>

  );
}

export default Hook2;