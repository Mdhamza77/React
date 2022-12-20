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




