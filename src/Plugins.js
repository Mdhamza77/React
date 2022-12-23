import React from 'react';

import $ from 'jquery'
class Plugins extends React.Component {
    componentDidMount(){
        this.$el = $(this.el);
        
    }
    componentWillUnmount(){
        console.log("Exit the")
    }
    render() {
        return (
            <div>
                <select className='select' ref={el => this.el = el}>
                    {this.props.children}
                </select>
            </div>
        );
    }
}

export default Plugins;
