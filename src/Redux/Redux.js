import react, {useState,useEffect} from 'react'

export  default function Redux() {
    // State declaration
    const [count , setCount] = useState(0); 
    // Actions Performed based on input
    const increment = ()=>{
        setCount(prev => prev + 1)
    }
// View : description display on UI
    return(
        <div>
           value : {count}
           <button onClick={increment}>onClick</button>
        </div>
    )
    }
    
