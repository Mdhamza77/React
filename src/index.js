import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App' ;
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)

function User(props){
    return <h1>Welcome to Home page</h1>
}
function Guest(props){
return <h1>Welcome guest , please signup</h1>
}


function Greeting(props){
const isLogged = props.isLogged
if(isLogged){
return <User/>
}
else {
return <Guest/>
}
}


root.render(<Greeting  isLogged = {false} />)


console.log("Define React ?")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
