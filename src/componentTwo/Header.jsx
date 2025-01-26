import React, { useState, useCallback } from 'react';

const Header = ({handleValue, count, setCount}) => {
    console.log('object')
    const result = handleValue(count)
  return (
   <div>
    <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
    <p>{result}</p>
   </div>
  )
}

export default React.memo(Header)
