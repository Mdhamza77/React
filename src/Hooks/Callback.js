import React, { useState,useCallback} from 'react';

const Callback = () => {
     const [count , setCount] = useState(0);
     const [number ,setNumber] = useState(0)

     const  Increment = ()=>{
        setCount(count + 1)
        console.log("Incremented Counter")
     }
     const  Decrement = ()=>{
        setCount(count - 1)
        console.log("Decremented Counter"  )
     }
     const  Incremen = ()=>{
        setNumber(number + 1)
        console.log("Incremented Number")
     }
     const  Decremen = ()=>{
        setNumber(number - 1)
        console.log("Decremented Number")
     }

     return (
        <div>
            <div>             Count : {count}
             <button onClick={Increment}>Increase Counter</button>
             <button onClick={Decrement}>Decrement Counter</button>
             number : {number} 
             <button onClick={Incremen}>Number Increment</button>
             <button onClick={Decremen}>Number Increment</button>
             </div>
        </div>
        
    );
}

export default Callback;
