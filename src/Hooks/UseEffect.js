import React, {useState,useEffect} from "react";

const UseEffect = () => {
    const [count,Setcount] = useState(0);
    useEffect(()=>{
        let Timer = setTimeout(()=>{
            Setcount((count) => count + 1 )
        },1000)
        return () => clearTimeout(Timer)
    })
    return (
        <div>
            <h1>I've Encounterd {count} times</h1>       
        </div>
    );
}

export default UseEffect;
