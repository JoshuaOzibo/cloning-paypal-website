import React, { useContext } from "react";
import { CountContext } from "../contextContainer/context";

const Increment = () => {
  const { increment } = useContext(CountContext);
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Increment;
