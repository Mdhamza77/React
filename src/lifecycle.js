import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            favourite : "Watermelon"
        }
    }
        componentDidMount(){
           this.x=  setInterval(
                ()=>{
                  this.setState ({favourite : "Apple"})
                },1000
           )
    }
    componentWillUnmount(){
        clearInterval(this.x)
    }
    render() {
        return (
            <div>
                <h3>The Following tags represernt the Mounting Methods</h3>
                <p>This Representing the {this.state.favourite} fruits of mine</p>
            </div>
        );
    }
}

export default Lifecycle;
