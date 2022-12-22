import React, { Component } from 'react';
const Counter = React.forwardRef((props,ref)=>{

    class Counter extends Component {
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }
        render() {
            return (
                <div>
                   Count : {this.state.count}
                   <button  ref={ref} onClick = { ()=> this.setState({
                    count : this.state.count +1
                   })}>Increment</button>
                </div>
            );
        }
    }
   return <Counter/> 
})

export default Counter;