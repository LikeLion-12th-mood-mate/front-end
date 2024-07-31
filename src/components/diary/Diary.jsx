import React, { useEffect, useState } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

import Gridwrap from '../grid/Gridwrap'
import GetAnalystData from '../../api/diary/GetAnalystData';
import Analyst from './Analyst';
import getNickName from '../../api/getNickName';
import getCalendar from '../../api/diary/GetCalendar';
function Diary() {
  const [calendarData,setCalendarData] = useState();
  const [selectDate,setSelectDate] = useState('');
  const [nickname,setNickname] = useState('');
  const token = sessionStorage.getItem('token')
  const navigate = useNavigate();
  const formatDay = (locale, date) => date.getDate();
  const formatShortWeekday = (locale, date) => {
    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return weekdays[date.getDay()];
  };
  const highlightedDates = calendarData?.map(item => new Date(item.time)) || [];
  
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
  const handleDateClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const isHighlighted = highlightedDates.some(highlightedDate =>
      date.getDate() === highlightedDate.getDate() &&
      date.getMonth() === highlightedDate.getMonth() &&
      date.getFullYear() === highlightedDate.getFullYear()
    );
    if (!isHighlighted) {
      navigate(`/diary/${formattedDate}`);
    }
    else{
      // const response = GetAnalystData();
      // console.log(response.data)
      // setAnalystData(response.data)
      setSelectDate(formattedDate)

    }
  };
  useEffect(()=>{
    const getCalendarData = async()=>{
      const response = await getCalendar({token:token})
      const response2=await getNickName();
      console.log(response2.nickname)
      console.log(response)
       setCalendarData(response);
      setNickname(response2.nickname)
    }
    getCalendarData()
  },[])
  return (
    <section className='diary'>
      <Gridwrap>
        <h3 className='header'>{nickname}님의 하루는 어땠나요? <br/> 오늘의 심리상태를 기록해보세요</h3>
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
          onClickDay={handleDateClick}
        />
      </div>
      <Gridwrap>
      {selectDate ? <Analyst analystData={calendarData} selectDate={selectDate}/> : ''}
        
      </Gridwrap>
     
      <Outlet />
    </section>
  )
}

export default Diary