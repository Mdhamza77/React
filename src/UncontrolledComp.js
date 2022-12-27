import React, { Component } from 'react';

class UncontrolledComp extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();
        }
        handleChange(even){
            alert("A name is Submitted using Uncontrolled Components " + this.input.current.value)
        }
    render() {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                   <label>
                        Name
                        <input type="text" ref={this.input} placeholder="Enter Full name"/>
                   </label>
                   <input type="submit" value="submit" />

                </form>
            </div>
        );
    }
}

export default UncontrolledComp;
