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
import SelectPlugin from './SelectPlugin';
import Spread from './Spread';
import Practice from './Practice';
import StateHook from './Hooks/StateHook';
import UseEffect from './Hooks/UseEffect';
import Exercise from './Hooks/Exercise';
import WebComponents from './WebComponents';
import UncontrolledComp from './UncontrolledComp';
import FunctionalUpdate from './Hooks/FunctionalUpdate';
import HookContext from './Hooks/HookContext';
import Task1 from './Hooks/Task1';
import Mounting from './Mounting';
import Task2 from './Hooks/Task2';
import TypeCheck from './TypeCheck';
import Redux from './Redux/Redux';
import Task3 from './Task3';
import CounterOne from './Hooks/CounterOne';
import UseRef from './Hooks/UseRef';
import UseMemo from './Hooks/UseMemo';
class App extends Component {
  render(){
     // Destructing the props
     //const {show , handle} = this.props ;
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
         <StateHook/>
         <UseEffect/>
         <Exercise/>
         <WebComponents/>
         <UncontrolledComp/>
         <FunctionalUpdate/>
         <HookContext/>
         <p>Lifecycle Methods vs Hooks</p>
         <Task1/><br/>
         <Mounting/>
         <Task2/>
         <TypeCheck/>
         <Redux/>
         <Task3/>   
         <CounterOne/>  
         <UseRef/> 
         <UseMemo/>   
         
         
        
         
             
  </div>
  
    </div>
  );
}
}


export default Practice(App);  

