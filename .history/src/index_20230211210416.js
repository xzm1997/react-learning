import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import BookInfo from './component/BookInfo/BookInfo.js'
import HomePage from './component/TextChange/TextChange.js'


export function Root() {
  // const userName = '王大老虎';
  // const ticketInfo = {
  //   airline : '汉莎航空',
  //   flightNum : 'LH7324',
  //   level : '超级经济舱',
  //   plane : '空客a350'
  // }
  // return (
  //   <div>
  //     <BookInfo 
  //       userName={userName}
  //       ticketInfo={ticketInfo}
  //     />
  //   </div>
  // )
  return (
    <div>
      <HomePage />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
