import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder' + props.color}>
      {props.children}
    </div>
  );
}

function Compos(props) {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.def}
          Thank you for visiting our spacecraft!
        </p>
           {props.children}
      </FancyBorder>
            
    );
}


class Composition extends React.Component {
  constructor(props){
    super(props);
    this.state = {text : " "}
    this.Change = this.Change.bind(this);
    this.text = this.text.bind(this);
  }
  Change(e){
    this.setState({
        text : e.target.value
    })
  }
    text(){
      alert(`Display the following Comments   ${this.state.text}`)
    }
  
  render() {
    return (
      <div>
        <h3>This is Composition block</h3>
         <Compos title = "Dan Brown's Origin" 
             def = "Best Crime thriller novel story Writer" />
          <input type="text" value={this.state.text} onChange ={this.Change} />  
          <button value={this.state.text} onClick={this.text} >Submit</button>
      </div>
    );
  }
}

export default Composition;






