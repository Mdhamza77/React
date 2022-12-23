import React from 'react';
function Item(props){
         return <li>{props.message}</li>
}
const Array = () => {
    const list = ["Apple","Mango","Banana"]
    return (
        <ul>
            {list.map((message)=>
                <Item key={message} message={message} />
            )}
        </ul>
    );
}

export default Array;
