import React, { Component } from 'react';

class Events extends Component {
    constructor(props){
        super(props); 
        this.state = {ToggleOn : true}
        // This Binding is necessary 
        // In JavaScript, class methods are not bound by default.
        this.handle = this.handle.bind(this)
    }
    handle(){
        this.setState(prev =>({
            ToggleOn : !prev.ToggleOn
        })) ; 
    }
    render() {
        return (
            <div>
                <button onSubmit={this.handle}>{this.state.ToggleOn ? 'ON': 'OFF'}</button>
            </div>
        );
    }
}

export default Events;



//  Conditonal Handler  


function User(props){
            return <h1>Welcome to Home page</h1>
}
function Guest(props){
     return <h1>Welcome guest , please signup</h1>
}


function Greeting(props){
     const isLogged = props.isLogged
     if(isLogged){
        return <User/>
     }
     else {
        return <Guest/>
     }
}


// Inline Conditonals 


function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(<Mailbox unreadMessages={messages} />);

  


  