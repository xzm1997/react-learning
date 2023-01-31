import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export function UserInfo(props) {
  return (
    <div className='userInfo'>
      <img 
        src='https://img1.baidu.com/it/u=2017107515,121176475&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' 
        alt='ava'
        className='ava'
      ></img>
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
    <div className='contentDisplay'>
      <div className='totalTitle'>预定信息</div>
      <UserInfo userName={props.userName} />
      <div className='infoDisplay'>
        <div className='infoItem leftSide'>
          <InfoShow title='航空公司' className='leftSide' content={props.ticketInfo.airline}/>
          <InfoShow title='航班号' className='leftSide' content={props.ticketInfo.flightNum}/>
        </div>
        <div className='infoItem rightSide'>
          <InfoShow title='航班舱位' className='leftSide' content={props.ticketInfo.level}/>
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
