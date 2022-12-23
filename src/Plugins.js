import React from 'react';

import $ from 'jquery'
class Plugins extends React.Component {
    componentDidMount(){
        
        this.$el = $(this.el);
        
    }
    componentWillUnmount(){
        
        alert("Done unmounting")
    }
    render() {
        return (
            <>                
            <select className='select' ref={el => this.el = el}>
                {this.props.children}
                </select>
            </>

        );
    }
}

export default Plugins;
