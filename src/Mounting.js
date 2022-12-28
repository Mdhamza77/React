import React, { Component } from 'react';

class Mounting extends Component {
    constructor(props){
        super(props);
        this.state = {
            num : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
             this.setState({
               num : this.state.num + 1 
             })
    }
    componentDidMount(){
        console.log("Mounting")
    }
    componentDidUpdate(){
        console.log("Updated")
    }
    render() {
           console.log("Rendering")
        return (
            <div>
                <p>This is current {this.state.num} num</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default Mounting;
