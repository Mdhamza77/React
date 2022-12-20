import React from 'react';

function FancyBorder(props) {
  return (
    <div>
      {props.children}
      <h1>Child</h1>
    </div>
  );
}

const Composition = () => {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
            
    );
}

export default Composition;




function con(){
  return <div className='contacts'>This is dummy Component</div>
}
function span(props){
     return(
      <con className='contacts'>
        {props.left}
        <h1>Welcome to page Composition</h1>
      </con>
     )
}

function co(){
 return(
    <span left="Welcome">
      
    </span>
 )
}