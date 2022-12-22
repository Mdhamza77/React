import React, { Component } from 'react';
import Counter from './Counter';
class Reff extends Component {
    constructor(props){
        super(props);
        this.aRef = React.createRef() ;
    }
    render() {
        return (
            <div>
                <Counter ref={this.aRef} />
                <button onClick= {()=>{console.log(this.aRef)}} >
                    Click
                </button>
            </div>
        );
    }
}

export default Reff;
