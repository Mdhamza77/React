import React, {useReducer} from "react";
   
const initialState = 0 ;
const reducer = (state,action) => {
      switch (action) {
        case 'Increment':
               return state + 1 ;  // Accepts the current state and returns the new State in Reducer Function 
        case 'Decrement' : 
               return  state - 1;
        case  'Reset' : 
                return initialState            
        default:
            return state ;
      }
}

function CounterOne() {
   const  [count,currentState]  =  useReducer(reducer,initialState) 
    return (
         <div>  
             <div>count {count}</div>
             <button onClick={()=> currentState('Increment')}>Increment</button>
             <button onClick={()=> currentState('Decrement')}>Decrement</button>
             <button onClick={()=> currentState('Reset')}>Reset</button>
         </div>
    )
}

export default CounterOne ;