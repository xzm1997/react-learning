import './BookInfo.css'

export function UserInfo(props) {
  return (
    <div className='userInfo'>
      <img 
        src='https://img1.baidu.com/it/u=1964469406,3571897169&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' 
        alt='ava'
        className='ava'
      ></img>
      <div className='userName'>{props.userName}</div>
    </div>
  )
}

export function InfoShow(props) {
  return (
    <div className='infoShow'>
      <div className='bookTitle'>{props.title}</div>
      <div className='bookContent'>{props.content}</div>
    </div>
  )
}

export default function BookInfo(props) {
  return (
    <div className='contentDisplay'>
      <div className='totalTitle'>预定信息</div>
      <UserInfo userName={props.userName} />
      <div className='infoDisplay'>
        <div className='infoItem leftSide'>
          {/* <InfoShow title='航空公司' content={props.ticketInfo.airline}/> */}
          <InfoShow title='预定时间'/>
          <InfoShow title='航班号' content={props.ticketInfo.flightNum}/>
        </div>
        <div className='infoItem rightSide'>
          <InfoShow title='航班舱位' content={props.ticketInfo.level}/>
          <InfoShow title='航班机型' content={props.ticketInfo.plane}/>
        </div>
      </div>
    </div>
    )
}
