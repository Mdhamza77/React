import React, {useRef} from "react";

function UseRef() {
     const textInput = useRef(null)
     const onClik = ()=>{
        textInput.current.focus();
     }
   return (
     <>
       <input ref={textInput} type="text" />
       <button onClick={onClik}>Focus On input</button>
     </>
   )
}

export default UseRef ;