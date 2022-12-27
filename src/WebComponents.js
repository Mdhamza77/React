import React, { Component } from 'react';
class WebComponents extends Component {
    render() {
        return (
            <div>
                Hello <x-search>{this.props.name}</x-search>!
            </div>
        );
    }
}

export default WebComponents;
