import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function userInfo(props) {
  return (
    <div>
      <img src='' alt='ava'></img>
      <div className='userName'>{props.userName}</div>
    </div>
  )
}

export function infoShow(props) {

}

export function BookInfo(props) {
  console.log(props.userName)
  return (
    <div>
      <div>预定信息</div>
      <div>
        <img src='' alt='ava'></img>
        <div className='userName'>{props.userName}</div>
      </div>
      <userInfo userName={props.userName} />
      <div>

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
      <BookInfo userName={userName}/>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
