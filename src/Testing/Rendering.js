import React from 'react';

const Rendering = (props) => {
    if(props.name){
        return <h1>Hello {props.name}</h1>
    }
    else{
        return <span>Hey, stranger</span>
    }
}

export default Rendering;
