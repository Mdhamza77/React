import React from "react";
import {render, unmountComponentAtNode} from "react-dom"
import {act} from "react-dom/test-utils"
import Rendering from "./Rendering";

let container = null ;
beforeEach(()=>{
    // set up a Dom element as a Render Target.
    container = document.createElement("div")
    document.body.appendChild(container);
})

afterEach(()=>{
    // Cleaning up on Exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null ;
})

it("renders with or without a name", () => {
    act(() => {
      render(<Rendering />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");
  
    act(() => {
      render(<Rendering name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");
  
    act(() => {
      render(<Rendering name="Margaret" />, container);
    });
    expect(container.textContent).toBe("Hello, Margaret!");
  });
  
    

