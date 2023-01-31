import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function HelloWorld(props) {
  return (
    <div
      className='helloWorld'
    >
      Hello World {props.time}
    </div>
  )
}

function tick() {
  const time = new Date().toLocaleTimeString().toString();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HelloWorld time="11:13:12"/>);
}

setInterval(tick, 1000);

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HelloWorld />);
