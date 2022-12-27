import React, { Component } from 'react';
class WebComponents extends Component {
    render() {
        return (
            <div> Web Component Example :::
                Hello <x-search>{this.props.name}</x-search>!
            </div>
        );
    }
}

export default WebComponents;
