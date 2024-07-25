import React, { useEffect, useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

import Gridwrap from '../grid/Gridwrap'
const dummydata = {
  "status": 200,
  "data": {
      "totalTime": "02:13:20", // hh-mm-ss
      "calendar": [
          {
              "attendanceId": 1,
              "date": "2024-07-23",
          },
          {
              "attendanceId": 2,
              "date": "2024-07-24",
          }
      ]
  },
  "message": "일기쓰기 API 호출 성공"
}
function Diary() {
  const [calendarData,setCalendarData] = useState();
  const [currentDate, setCurrentDate] = useState(new Date());
  const formatDay = (locale, date) => date.getDate();
  const formatShortWeekday = (locale, date) => {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return weekdays[date.getDay()];
  };
  const highlightedDates = calendarData?.data?.calendar?.map(item => new Date(item.date)) || [];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const isHighlighted = highlightedDates.some(highlightedDate =>
        date.getDate() === highlightedDate.getDate() &&
        date.getMonth() === highlightedDate.getMonth() &&
        date.getFullYear() === highlightedDate.getFullYear()
      );
      return isHighlighted ? 'highlighted-date' : null;
    }
  };
  useEffect(()=>{
    const getCalendarData = ()=>{
      // const response = getCalendar()
      // setCalendarData(response.data);
      // console.log(response.data)
      setCalendarData(dummydata);
    }
    getCalendarData()
  },[])
  return (
    <section className='diary'>
      <Gridwrap>
        <h3 className='header'>박서현님의 하루는 어땟나요? <br/> 오늘의 심리상태를 기록해보세요</h3>
      </Gridwrap>
      <div className='calendar-container'>
      <Calendar
          formatDay={formatDay}
          formatShortWeekday={formatShortWeekday}
          formatMonthYear={(locale, date) => moment(date).format('MMMM')}
          calendarType="gregory" // 일요일 부터 시작
          next2Label={null} // +1년 & +10년 이동 버튼 숨기기
          prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
          tileClassName={tileClassName}
        />
      </div>
      {calendarData?.data?.calendar?.map((item)=>(
        <Link to={`/diary/${item.date}`}><button>{item.date}</button></Link>
      ))}
     
      <Outlet />
    </section>
  )
}

export default Diary