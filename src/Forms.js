
import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.Change = this.Change.bind(this)
        this.Submit = this.Submit.bind(this)
    
    }

    Change(event) {
        this.setState({ value: event.target.value })
    }
    Submit(event) {
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


// // Text area Practice Code
// class text extends React.Component {
// constructor(props){
//     super(props);
//     this.state =  {value : " "}
//      this.handleC = this.handleC.bind(this);
//      this.handleS = this.handleS.bind(this);
// }

// handleC(even) {
//     this.setState({value : even.target.value})
// }

// handleS(even){
//     alert("This  shows the form Input Submitted Value " +  this.state.value)
// }

// render() {
//     return(
//         <form onSubmit={this.handleS}>
//             <label>Text Area
//             <textarea onChange={this.handleC} value={this.state.value} />
//             </label>
//             <input  type="submit" value="submit"/>
//         </form>
//     )
// }
// }

// //  Select is used for creation a drop down list 
// <form onSubmit={this.f()}>
// <select value={this.state.value} onChange={this.F()}>
//  <option value="Water Melon" >Water Melon</option>
// </select>
// </form>

// // <select multiple={true} value={['B', 'C']}>


// // Handling multiple inputs. 

// class reserv extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isComp : true ,
//             no : 2 
//         }; 
//         this.handele = this.handele.bind(this);
//     }
//     handele(eve){
//           const target = eve.target ;
//           const value = target.type === 'checkbox' ? target.checked : target.value ; 
//           const name = target.name ;
//     this.setState({
//         [name] : value 
//     }) 
//     }
//     render() {
//         return (
//             <form>
//                 <label>
//                     Is Complete
//                     <input type="checkbox" name="i"></input>
//                     </label>
//             </form>
//         )
//     }
//}