import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function HelloWorld() {
  return (
    <div>
      <div
      className='title head'
      style={{color:'red', fontSize:'16px'}}
      >
        Hello World
      </div>
      <div>It is {new Date().toLocaleTimeString()}.</div>
    </div>
    
  )
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
