import React, { useContext } from "react";
import { useState, useMemo, useCallback } from "react";
import Header from "./Header";
import { AppContext } from "./contextContainer/context";

export default function HooksLearning() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // const expensiveCalc = (num) => {
  //     console.log('expensiveCalc called');

  //     return Math.pow(num, 2);
  // };

  // ------------- useMemo -------------

  // const result = useMemo(() => expensiveCalc(count), [count])

  // ------------- useCallback -------------

  // const handleValue = useCallback((countNum) => {
  //     return Math.pow(countNum, 2)
  // }, []);

  const {switchBtn} = useContext(AppContext);


  return (
    <div>

        <div className="w-full flex justify-end">
            <button onClick={switchBtn} className="px-5 py-2 mx-10 mt-10 bg-slate-500 text-white">Switch</button>
        </div>
      {/* <p>{result}</p> */}
      {/* <input type="text" value={count} onChange={(e) => setCount(e.target.value)} /> */}

      <button
        onClick={() => {
          console.log("num", num + 1), setNum(num + 1);
        }}
      >
        Add num
      </button>

      <p>{num}</p>

      {/* <Header handleValue={handleValue} count={count} setCount={setCount} /> */}
{/* 
      <Increment />
      <p>{countNum}</p>
      <Decrement /> */}
    </div>
  );
}
