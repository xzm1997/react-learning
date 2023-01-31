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
  const timeNow = new Date().toLocaleTimeString();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HelloWorld time={timeNow}/>);
}

setInterval(tick, 1000);

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HelloWorld />);
