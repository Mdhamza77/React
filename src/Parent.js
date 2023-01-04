import React from 'react';
import ChildParent from './ChildParent';

const Parent = () => {
      const pull = (data) => {
        console.log(data)
      }
    return (
        <div>
            <h3>This is Parent Component</h3>
            <ChildParent  func = {pull}/>
        </div>
    );
}

export default Parent;
