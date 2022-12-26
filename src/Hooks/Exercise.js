import React,{useState,useEffect} from "react";
function  Exercise(){
    const [count,setCount] = useState(0);
    const [increment,setInc] = useState(0)
    useEffect(() => {
       if(!increment >= 0){
           console.log("exiting loop")
       }
       console.log('count value is updating');
    });
    return (
        <>
        <h1>This is Counter Click Button {count} , {increment}</h1>
        <button onClick={()=> setInc(increment + 1)}>increment</button><br/><br/>
         <button onClick={ () =>setCount(count+1)}>Click Me </button>

         </>
    )
}

export default Exercise;