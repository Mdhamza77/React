import React,{useState,useContext,createContext, Component} from 'react';

const Usercont = createContext();
const HookContext = () => {
    const [user,setUser] = useState("Hooks Using Context");
    return (
      <Usercont.Provider value={user}>
        <h1>{`Welcome to topic ${user}`}</h1>
        <Component5/>
      </Usercont.Provider>

    );
}

function Component5(){
    const u = useContext(Usercont);
    return (
       <>
        <h1>This is Component 5 accessing the parent Component</h1>
        <h2>{`Accessing the Parent Context "${u}" again`}</h2>
        </>  
    )
}
export default HookContext;
