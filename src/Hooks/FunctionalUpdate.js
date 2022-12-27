import React, { useState } from 'react';

const FunctionalUpdate = () => {
    const initialCount = 0 ;
    const [count,setCount] = useState(initialCount)
    return (
        <div>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>+{count}</button>
        </div>
    );
}

export default FunctionalUpdate;
