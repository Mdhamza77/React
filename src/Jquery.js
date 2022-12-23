import React from 'react';

const Jquery = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Helllo Jquery </button>
        </div>
    );
}

export function Button(){
    function Handle(){
        alert("Welcome to Integrating Simple Jquery")
    }
    return <Button onClick={Handle}/>
}

export default Jquery;
