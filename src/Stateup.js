import React, { Component } from 'react';
function Temp(props) {
    if (props.celsius > 100) {
        return <p>The Water will Boil</p>
    }
    return <p>The Water will not boil</p>
}

class Stateup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: " "
        }
        this.handle = this.handle.bind(this);
    }
    handle(e) {
        this.setState({ temperature: e.target.value })
    }
    render() {
        const temp = this.state.temperature
        return (
            <fieldset>
                <legend>Enter temperature in celsius</legend> 
                <input type="number" value={temp} onChange={this.handle} />
                <Temp celsius={parseFloat(temp)} />
            </fieldset>
        );
    }
}

export default Stateup;

