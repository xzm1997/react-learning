import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function BookInfo(props) {
  return (
    <div>
      <div>预定信息</div>
      <div>
        <img></img>
      </div>
    </div>
    )
}

export function Root() {
  const userName = '王大老虎';
  const airline = '汉莎航空';
  const flightNum = 'LH7324';
  const level = '超级经济舱';
  const plane = '空客a350';
  return (
    <div>
      <BookInfo />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
