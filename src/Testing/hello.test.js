import React from "react";
import { render , unmountComponentAtNode } from 'react-dom' ;
import {act} from 'react-dom/test-utils'

import Hello from './hello' ;

let container = null 
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.getElementById("div");
    document.body.appendChild(container)
}) ;

afterEach (() => {
    // clean up on exiting
    unmountComponentAtNode(container);
    container.remove() ;
    container = null ;
}) ;

it('renders with or without a name', () => {
    act(()=> {
        render(<Hello/> , container)
    }) ; 
    expect(container.textContent).toBe("Hey ,Stranger") ;

    act(()=> {
        render(<Hello name="jake sully"/> , container)
    }) ; 
    expect(container.textContent).toBe("Hey ,Jake sully")
});

