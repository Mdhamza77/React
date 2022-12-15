import React from "react";
import { ReactDOM } from "react";
const alarm = ReactDOM.createRoot(document.getElementById('r'));
  
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  alarm.render(element);
}

setInterval(tick, 1000);

export default tick   