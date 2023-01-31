import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function HelloWorld() {
  return (
    <div
      className='helloWorld'
    >
      Hello World {new Date().toLocaleTimeString()}
    </div>
  )
}

function tick() {
  time = new Date().toLocaleTimeString()
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HelloWorld />);
}

setInterval(tick, 1000);

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HelloWorld />);
