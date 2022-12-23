import React, { Component } from 'react';

class Plugins extends Component {
    componentDidMount(){
        this.$el = $(this.el);
        this.$el.Plugins();
    }
    componentWillUnmount(){
        this.$el.Plugins('Destroy')
    }
    render() {
        return (
            <div ref={el => this.el = el}/>
        );
    }
}

export default Plugins;
