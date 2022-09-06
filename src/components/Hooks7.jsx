import { useState } from "react";
//import { useCounter } from "react";

function useCounter(intialeCount) {
  const [count, setCount] = useState(intialeCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return { count, handleIncrement, handleDecrement };
}

export default function Hooks7() {
    const { count, handleIncrement, handleDecrement } = useCounter(0);
  
    return (
      <>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Sumar +1</button>
        <button onClick={handleDecrement}>Restar -1</button>
      </>
    );
  }
export { useCounter };