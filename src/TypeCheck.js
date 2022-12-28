import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TypeCheck extends Component {
    static defaultProps = {
        name : "Hamza Muhammed" ,
        num  : true ,
        array : [1,2,3,4,5,6]
    }
    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                    <br/>
                    {this.props.num}
                    <br/>
                    {this.props.array}
                </h1>
            </div>
        );
    }
}

TypeCheck.propTypes = {
    name : PropTypes.string ,
    num : PropTypes.number ,
    array : PropTypes.array
}

export default TypeCheck;
