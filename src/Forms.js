
import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.Change = this.Change.bind(this)
        this.Submit = this.Submit.bind(this)
    }

    Change(events) {
        this.setState({ value: events.target.value })
    }
    Submit(events) {
        alert('A Name is submitted ' + this.state.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.Submit}>
                    <label>Name:
                        <input type="text" value={this.state.value}  onChange={this.Change} name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Forms;
