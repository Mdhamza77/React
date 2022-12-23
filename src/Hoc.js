import React, { Component } from "react";

const Components = (OriginalComp) =>{
    class NewComp extends Component{
        constructor(props){
            super(props);
            this.handle = this.handle.bind(this);
            this.state = { 
                count : 0
            }
        
        }
        handle(){
                this.setState({
                    count : this.state.count + 1
                })
        }
        render(){
          return  <OriginalComp name = "Welcome to Higher Order Components" handle={this.handle} show = {this.state.count} ></OriginalComp>
        }
        
    }
    return NewComp; 
}

export default Components;