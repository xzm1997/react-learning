import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Root</div>
    )
  }
}

export function HelloWorld() {
  return (
    <div
      className='title head'
      style={{color:'red', fontSize:'16px'}}
    >
      Hello World
    </div>
  )
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
