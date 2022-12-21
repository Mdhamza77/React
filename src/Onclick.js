import React from "react";
class Onclick extends React.Component {
         constructor(props){
             super(props);
             this.state = {
                 value : 0
             }
            
         }
         handle(){
            this.setState(({value})=>({
                    value : value + 1
            }))
             console.log("Click handle")
         } 
         render(){
            if(this.state.value === 5) {
                throw new Error("I am Crashed")
            }
             return(
                 <h2 onClick={()=>{this.handle()}}> {this.state.value} click
                 </h2>
                 
             )
         }
     }
     export default Onclick; 