import React, { useEffect, useState } from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

import Gridwrap from '../grid/Gridwrap'
import GetAnalystData from '../../api/diary/GetAnalystData';
import Analyst from './Analyst';
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
const dummydata2={
  emotion:[
      {
          emotion:'행복',
          percentage:'40%'
      },
      {
          emotion:'슬픔',
          percentage:'30%'
      },
      {
          emotion:'화남',
          percentage:'10%'
      },
      {
          emotion:'부끄러움',
          percentage:'20%'
      },
  ],
  content:{
      content:'예시: "갑자기 생각지도 못한 문제들이 발생해서 두려움이 밀려왔다. 이 문제를 해결하지 못하면 큰일 날 것 같았고, 모든 게 무너질 것만 같았다."조언: 문제가 발생했을 때 두려움을 느끼는 것은 자연스러운 반응입니다. 그러나 두려움에 사로잡히지 않도록 하는 것이 중요합니다. 문제를 작은 단계로 나누어 해결해 보세요. 동료들과 함께 문제를 해결하려고 노력한 것은 좋은 접근입니다. 지속적으로 협력하고 소통하며 해결책을 모색하는 것이 중요합니다'
  }
}
function Diary() {
  const [calendarData,setCalendarData] = useState();
  const [analystData,setAnalystData] = useState();
  const [selectDate,setSelectDate] = useState('');
  const navigate = useNavigate();
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
      setAnalystData(dummydata2)
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
        <h3 className='header'>박서현님의 하루는 어땠나요? <br/> 오늘의 심리상태를 기록해보세요</h3>
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
      {selectDate ? <Analyst analystData={analystData} selectDate={selectDate}/> : ''}
        
      </Gridwrap>
     
      <Outlet />
    </section>
  )
}

export default Diary