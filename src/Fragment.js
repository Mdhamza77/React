import React, { Component } from 'react';

class Fragment extends Component {
    render() {
        return (
            //<div> In order for the elements to be rendered it should be valid
            <React.Fragment>
                <p>Welcome</p>
                <p>To Fragments</p>
            </React.Fragment>
                
            //</div>   Also we can use Short Symta
        );
    }
}
export default Fragment;
