import React, { Profiler } from 'react';
import { Component } from 'react';
import './App.css';
import Props from './Props';
import Class from './Class';
import Stateup from './Stateup';
import Forms from './Forms';
import Composition from './Composition';
import Lifecycle from './lifecycle';
import ParentChild from './ParentChild';
import Keyboard from './Keyboard';
import Split from './Split';
import DynamicContext from './Dynamic-context';
import FancyButton from './FancyButton';
import Reff from './Reff';
import Fragment from './Fragment';
import Components from './Hoc'
import SelectPlugin from './SelectPlugin';
import Spread from './Spread';
import Practice from './Practice';
class App extends Component {
  render(){
     // Destructing the props
     const {show , handle} = this.props ;
  return (

    <div className="App">
        <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
    <Props   
         name = "Muhammed" 
         age = "22"
         />
         <Profiler id='Class'>
         <Class/>  
         </Profiler>
         <Stateup/>
         <Forms/>
         <Composition/>
         <Lifecycle/>
         <ParentChild/>
         <Keyboard/>
         <Split/>
         <DynamicContext/>
         <FancyButton/>
         <Reff/>
         <Fragment/>
         <SelectPlugin/>
         <Spread/>
         <h2>{this.props.name}</h2>
         
             
  </div>
  
    </div>
  );
}
}


export default Practice(App);  

