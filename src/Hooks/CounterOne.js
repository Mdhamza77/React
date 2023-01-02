import React, {useReducer} from "react";
   
const initialState = {
    firstCount : 0
} ;
const reducer = (state,action) => {
      switch (action.type) {
        case 'Increment':
               return  {firstCount : state.firstCount + action.value} ;  // Accepts the current state and returns the new State in Reducer Function 
        case 'Decrement' : 
               return  {firstCount : state.firstCount - action.value};
        case  'Reset' : 
                return initialState            
        default:
            return state ;
      }
}

function CounterOne() {
   const  [count,dispatch]  =  useReducer(reducer,initialState) 
    return (
         <div>  
             <div>count {count.firstCount}</div>
             <button onClick={()=> dispatch({ type : 'Increment' , value : 5 })}>Increment 5</button>
             <button onClick={()=> dispatch({ type : 'Decrement' , value : 5})}>Decrement 5</button>
             <button onClick={()=> dispatch({ type : 'Reset'})}>Reset</button>
         </div>
    )
}

export default CounterOne ;