import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import Profile from './Profile';
import Header from '../common/Header';
import Gridwrap from '../../grid/Gridwrap';
import ProgramInfo from './ProgramInfo';
import Modal from './modal';
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
  member: '회원: 한국상담심리학회 정회원',
 
  program:[
    { programtime: '14:00-16:00',
      programplace: '온라인',
      programcontent:'"나를 찾아가는 여정" 프로그램은 참여자들이 자신의 내면을 탐구하고, 심리적으로 건강한 방향으로 성장할 수 있도록 지원하는 그룹 상담 프로그램입니다. 이 프로그램은 참여자들이 자신의 감정과 상황을 공유하고, 서로의 지원을 받으며 성장하는 공간을 제공합니다.각 회차에서는 개인의 심리 상태를 평가하고, 감정을 관리하는 방법을 배우며, 자아 존중감을 강화하는 심리 상담 세션을 진행합니다. 참여자들은 그룹 내에서의 경험을 통해 새로운 통찰을 얻고, 자신의 삶을 더 나은 방향으로 이끌어 나갈 수 있습니다."나를 찾아가는 여정"은 참여자들의 개인적인 발전과 성장을 돕는 동시에, 그룹 내에서의 지속적인 지지와 이해를 제공합니다. 안전하고 신뢰할 수 있는 환경에서 진행되며, 참여자들의 개인정보와 프라이버시를 최우선으로 합니다.'},
    { programtime: '14:00-16:00',
      programplace: '온라인',
      programcontent:'"나를 찾아가는 여정" 프로그램은 참여자들이 자신의 내면을 탐구하고, 심리적으로 건강한 방향으로 성장할 수 있도록 지원하는 그룹 상담 프로그램입니다. 이 프로그램은 참여자들이 자신의 감정과 상황을 공유하고, 서로의 지원을 받으며 성장하는 공간을 제공합니다.각 회차에서는 개인의 심리 상태를 평가하고, 감정을 관리하는 방법을 배우며, 자아 존중감을 강화하는 심리 상담 세션을 진행합니다. 참여자들은 그룹 내에서의 경험을 통해 새로운 통찰을 얻고, 자신의 삶을 더 나은 방향으로 이끌어 나갈 수 있습니다."나를 찾아가는 여정"은 참여자들의 개인적인 발전과 성장을 돕는 동시에, 그룹 내에서의 지속적인 지지와 이해를 제공합니다. 안전하고 신뢰할 수 있는 환경에서 진행되며, 참여자들의 개인정보와 프라이버시를 최우선으로 합니다.'},
  ]
}
function ConsultDetail() {
  const [counselor, setCounselor] = useState([]);
  const {id} = useParams()
  useEffect(()=>{
    const getCounselorData=async()=>{
      //const response = getCounselorData();
      //setCounselor(response.data);
      //console.log(response.data)
      setCounselor(dummydata);
    }
    getCounselorData();
  },[])
  console.log(id)
  return (
    <div className='counselor'>
      <Gridwrap>
        <Header isVisible={true} link={'consult'} />
        <Profile counselor={counselor}/>
      </Gridwrap>  
      <div className='counselor-program-wrap'>
        <ProgramInfo counselor={counselor}/>
      </div>
      <Modal/>
      <Outlet/>
    </div>
  )
}

export default ConsultDetail