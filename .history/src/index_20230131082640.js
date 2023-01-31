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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
