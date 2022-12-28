import React, {useState} from 'react';

const Task2 = () => {
    const [name,setName] = useState("")
    const [update,setUpdate] = useState([]);
    const handle = (event) => {
           setName(event.target.value);
    }
    const click = () =>{
             setUpdate(name)
    }
    return (
        <div>
            <p>Welcome to Task 2</p>
            <input type="text" value={name} onChange={handle} />
            <p>Name :  {name}</p>
            <p>updated name : {update}</p>
            <button onClick={click}>Click</button>
        </div>
    );
}

export default Task2;
