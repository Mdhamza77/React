import React from "react";
class Onclick extends React.Component {
         constructor(props){
             super(props);
             this.state = {
                 value : ""
             }
            
         }
         handle(){
             console.log("Click handle")
         }
         render(){
             return(
                 <button onClick={()=>{this.handle()}}></button>
             )
         }
     }
     export default Onclick; 