import React, { Component } from 'react';

class Events extends Component {
    constructor(props){
        super(props); 
        this.state = {ToggleOn : true}
        // This Binding is necessary 
        // In JavaScript, class methods are not bound by default.
        this.handle = this.handle.bind(this)
    }
    handle(){
        this.setState(prev =>({
            ToggleOn : !prev.ToggleOn
        })) ; 
    }
    render() {
        return (
            <div>
                <button onSubmit={this.handle}>{this.state.ToggleOn ? 'ON': 'OFF'}</button>
            </div>
        );
    }
}

export default Events;
