// Example of Mountingn and Un mounting. 


import React, { Component } from 'react';
class Class extends Component {
    constructor(props){
        super(props)
        this.state = {date : new Date()};

    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            
        },100)
}
     componentWillUnmount(){
        clearInterval(this.timer)
     }
    //   tick(){
    //     this.setState = {date : new Date()}
    //  }

    render() {
        return (
            <div>
                <h1>Hello Welcome to life cycle Method</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}




export default Class;  




