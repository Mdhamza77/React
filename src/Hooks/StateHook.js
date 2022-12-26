import React , {useState , useEffect} from "react";
const StateHook = () => {
    // Declaring a State Variabe which will count
    const [count , Setcount] = useState(0) ;

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Welcome to React`
    });
    return (
        <div>
            <p>click {count} time</p>
            <button onClick={()=> Setcount(count+1)}> CLick Me </button>
        
        </div>
    );
}

export default StateHook;
