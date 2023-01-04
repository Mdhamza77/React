import React from 'react';

const ChildParent = (props) => {
      props.func("This is an Example is to define Child ")
    return (
        <div>
            <h4>This is Child Components Props Passed to Parent Component</h4>
        </div>
    );
}

export default ChildParent;
