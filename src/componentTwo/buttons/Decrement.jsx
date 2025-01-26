import React, { useContext } from "react";
import { CountContext } from "../contextContainer/context";

const Decrement = () => {
  const { decrement } = useContext(CountContext);

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Decrement;
