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

export function BookInfo(props) {

}

export function Root() {
  const userName = '王大老虎';
  const airline = '汉莎航空';
  const flightNum = 'LH7324';
  const level = '超级经济舱';
  const plane = '空客a350'
  return (
    <div>

    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
