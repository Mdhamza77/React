import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import App from './App' ;
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'))


function X(props) {
    return  <p>{props.value}</p>
}
function Rern(props) {
    const y = props.y
    return(
        <h3>
        {y.map((z)=> <X key={z.toString()} value ={z} />)
}</h3> )

}

const q = [22,44,33,444]
root.render(<Rern y={q}/>)



console.log("Define React ?")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
