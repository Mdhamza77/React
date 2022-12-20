import React from 'react';
import './App.css';
import Props from './Props';
import Class from './Class';
import Stateup from './Stateup';
import Forms from './Forms';
import Composition from './Composition';
import Lifecycle from './lifecycle';
import ParentChild from './ParentChild';
function App() {
  
  return (
    <div className="App">
        <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
    <Props   
         name = "Muhammed" 
         age = "22"
         />
         
         <Class/>
         <Stateup/>
         <Forms/>
         <Composition/>
         <Lifecycle/>
         <ParentChild/>
          
          
  </div>
  
    </div>
  );
}


export default App;  

