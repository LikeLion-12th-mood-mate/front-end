import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Profile from './Profile';
import Header from '../common/Header';
import Gridwrap from '../../grid/Gridwrap';
const dummydata ={
  id:1,
  category:'아동청소년 상담',
  star:4.9,
  time:'3분이내 가능',
  rating:'4.9',
  name:'최수빈상담사',
  content:'당신의 이야기를 진심으로 듣는 심리상담사입니다',
  career: '경력: 10년 이상의 심리상담 경력',
  Education: '학력: 서울대학교 심리학과 졸업, 임상심리 석사',
  experience: '경험: 아동, 청소년, 성인, 가족 상담 경험',
  present: '현재: [강남 힐링심리상담센터] 근무',
  profession: '전문 분야: 직장 스트레스, 우울증, 불안장애, 대인관계문제',
  member: '회원: 한국상담심리학회 정회원'
}
function ConsultDetail() {
  const [counselor, setCounselor] = useState();
  useEffect(()=>{
    const getCounselorData=async()=>{
      //const response = getCounselorData();
      //setCounselor(response.data);
      //console.log(response.data)
      setCounselor(dummydata);
    }
    getCounselorData();
  },[])
  return (
    <div className='counselor'>
      <Gridwrap>
        <Header isVisible={true} link={'consult'} />
        <Profile counselor={counselor}/>
      </Gridwrap>  
      <Outlet/>
    </div>
  )
}

export default ConsultDetail