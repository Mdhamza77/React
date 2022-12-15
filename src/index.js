import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

//const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    render(){
        return(
            <div> 
               <App/>
               <h3>{this.state.date.toLocaleTimeString()}</h3>
               <h4>it is {this.state.date.getDate()}-{this.state.date.getMonth()}-{this.state.date.getFullYear()}</h4> 
            </div>
        )
    }
}
function inter(){
    root.render(<Clock/>)
}

setInterval(inter,100)


console.log("Define React ?")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
