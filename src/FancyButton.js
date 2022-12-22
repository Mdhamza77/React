import React from 'react';

const FancyButton =React.forwardRef((props,ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
        Fancy Button
    </button>
) )
const ref = React.createRef();
<FancyButton  ref={ref}>Click Me</FancyButton>

export default FancyButton;
