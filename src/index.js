import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import App from './App' ;
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)
// class Examp extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value : ""
//         }
        
//     }
//     handle(){
//         console.log("Click handle")
//     }
//     render(){
//         return(
//             <button onClick={()=>{this.handle()}}></button>
//         )
//     }
// }
// export default Examp; 

// root.render(<Examp/>)


console.log("Define React ?")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

