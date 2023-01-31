import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export function UserInfo(props) {
  return (
    <div>
      <img src='' alt='ava'></img>
      <div className='userName'>{props.userName}</div>
    </div>
  )
}

export function InfoShow(props) {
  return (
    <div>
      <div className='bookTitle'>{props.title}</div>
      <div className='bookContent'>{props.content}</div>
    </div>
  )
}

export function BookInfo(props) {
  return (
    <div>
      <div>预定信息</div>
      <UserInfo userName={props.userName} />
      <div className='infoDisplay'>
        <div className='infoItem'>
          <InfoShow title='航空公司' content={props.ticketInfo.airline}/>
          <InfoShow title='航班号' content={props.ticketInfo.flightNum}/>
        </div>
        <div className='infoItem'>
          <InfoShow title='航班脸位' content={props.ticketInfo.level}/>
          <InfoShow title='航班机型' content={props.ticketInfo.plane}/>
        </div>
        
      </div>
    </div>
    )
}

export function Root() {
  const userName = '王大老虎';
  const ticketInfo = {
    airline : '汉莎航空',
    flightNum : 'LH7324',
    level : '超级经济舱',
    plane : '空客a350'
  }
  return (
    <div>
      <BookInfo 
        userName={userName}
        ticketInfo={ticketInfo}
      />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
