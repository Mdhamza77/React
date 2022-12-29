import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Task3 extends Component {
    static defaultProps = {
        name : "Hamza" ,
        number : 2222
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <br/>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Task3.protoTypes = {
    name : PropTypes.string ,
    number : PropTypes.number 
}
export default Task3;
