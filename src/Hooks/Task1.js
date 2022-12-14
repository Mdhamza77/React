import React, {useState,useEffect} from 'react';

const Task1 = () => {
   
    const [count, setCount] = useState(0);
    useEffect(()=>{  
     console.log(`Every time ${count} is clicked times`)
      return () => alert(`Components ${count}`)
    },[count])
    useEffect(()=>{
        alert("After Mounting")
    },[])
    return (
        <div>
            
            <p>This paragraph tag shows the count {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click me </button>
            <hr/>
        </div>
    );
}

export default Task1;
