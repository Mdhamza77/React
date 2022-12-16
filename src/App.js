import React from 'react';
import './App.css';
import Props from './Props';
import Class from './Class';
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
          
          
  </div>
  
    </div>
  );
}


export default App;  

