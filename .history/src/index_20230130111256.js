import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function HelloWorld(time) {
  return (
    <div
      className='title head'
      style={{color:'red', fontSize:'16px'}}
    >
      Hello World {time}
    </div>
  )
}

function tick() {

}

setInterval(tick, 1000);

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
