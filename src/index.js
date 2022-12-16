import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import App from './App' ;
import reportWebVitals from './reportWebVitals';

  const root = ReactDOM.createRoot(document.getElementById('root')); 

  function Warn(props){
    if(!props.warn){
      return null ;
    }
    return (
      <div> 
            Warning 
      </div>
    )
  }
  
  class Prevent extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {show : true}
      this.Toggle = this.Toggle.bind(this);
    }
     Toggle(){
      this.setState(state =>({
            show : !state.show 
      }))
     }
     render()  {
      return  (
        <div> 
            <Warn warn= {this.state.show} /> 
            <button onClick = {this.Toggle}>{this.state.show ? 'Hide' : 'Show'}
            </button>    
        
        </div>
      )
     }
  }

  root.render(<Prevent/>)

console.log("Define React ?")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
