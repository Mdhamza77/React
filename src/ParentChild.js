import React, {Component } from 'react';

class ParentChild extends Component {
    constructor(props){
        super(props);
        this.state = {
            message : "Welcome this is PArents Component"
        }
    }
    render() {
        return (
            <div>
                <Child message={this.state.message} />
            </div>
        );
    }
}

export default ParentChild;

class Child extends React.Component {
    render(){
        const {message} = this.props
        return(
          <div>
            <p>Message recievded from parent Components <b>{message}</b></p>
          </div>
            )
    } 

}