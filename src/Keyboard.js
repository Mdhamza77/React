import React, { Component, createRef } from 'react';

class Keyboard extends Component {
    constructor(props){
        super(props);
        this.state = {isOpen : false}
         // Create a ref to store the  Toggle in DOM element
        this.toggle = React.createRef();
        this.insideHandler = this.insideHandler.bind(this);
        this.outsideHandler = this.outsideHandler.bind(this);
    }
    componentDidMount(){
        window.addEventListener('click',this.outsideHandler)
    }
    componentWillUnmount(){
        window.addEventListener('click',this.outsideHandler)
    }
    insideHandler(){
        this.setState(current=>({
            isOpen : !current.isOpen
        }))
    }
    // Explicitly focus the text input using the raw DOM API
  // Note: we're accessing "current" to get the DOM node
    outsideHandler(event){
        if(this.state.isOpen && !this.toggle.current.contains(event.target)){
            this.setState({isOpen:false});
        }
    }
    render() {
        return (
            // Use the `ref` callback to store a reference to the toggle input DOM
            // element in an instance field (for example, this.toggle).
            <div ref={this.toggle}>
                <button onClick={this.insideHandler}>select</button>
                {this.state.isOpen &&(
                        <ul>
                            <li>Fresh Lime</li>
                            <li>Green Mint</li>
                            <li>Soda Lime</li>
                        </ul>
                    )
                }
            </div>
        );
    }
}

export default Keyboard;
