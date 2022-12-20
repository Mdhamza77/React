import React, { Component, createRef } from 'react';

class Keyboard extends Component {
    constructor(props){
        super(props);
        this.state = {isOpen : false}
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
    outsideHandler(event){
        if(this.state.isOpen && !this.toggle.current.contains(event.target)){
            this.setState({isOpen:false});
        }
    }
    render() {
        return (
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
