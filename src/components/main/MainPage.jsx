import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from '../grid/Gridwrap';
import Card from '../chat/Card';
import Cardwrap from '../chat/Cardwrap';
import GetChatInfo from '../../api/chat/GetChatInfo';




const dummydata = [
  {
    id:1,
    category:'아동청소년 상담',
    star:4.9,
    time:'3분이내 가능',
    rating:'4.9',
    name:'최수빈상담사',
    content:'당신의 이야기를 진심으로 듣는 심리상담사입니다',
  },
  {
    id:2,
    category:'아동청소년 상담',
    star:4.5,
    name:'한유진상담사',
    time:'1분이내 가능',
    rating:'4.9',
    content:'당신의 이야기를 진심으로 듣는 심리상담사입니다',
  },

  {
    id:3,
    category:'아동청소년 상담',
    start:4.8,
    name:'신도윤상담사',
    time:'5분이내 가능',
    rating:'4.8',
    content:'당신의 이야기를 진심으로 듣는 심리상담사입니다',
    
  }
]
const dummytitle = [
  {title:'아이와 마찰이 너무 심할 때 필요한 전문가'},
  {title:'직장에서 벌어진 일들 여기에 다 털어놓고 가세요'},
  {title:'나의 배우자와 소통이 어려울때 필요한 전문가'},
  {title:'불안에 대한 모든 고민을 도와주시는 전문가'},
  {title:'우울증에 대한 모든 고민을 도와주시는 전문가'},
  {title:'스트레스에 대한 모든 고민을 도와주시는 전문가'},
  {title:'여러분은 어디에서나 필요한 사람입니다'},

]



function MainPage() {
  const [consultData,setConsultData] = useState([]);
  const [searchTerm,setSearchTerm] = useState();
  const nickname = sessionStorage.getItem('nickname')
  useEffect(()=>{
    const getConsultData = async()=>{
      const response = await GetChatInfo();
      console.log('response: ',response.data)
      setConsultData(getRandomItems(response.data, 4));
    }
    getConsultData();
  },[])
  
  console.log('상담사 랜덤:',consultData)
  function getRandomItems(array, numberOfItems) {

    const shuffled = [...array].sort(() => 0.5 - Math.random());
    
    return shuffled.slice(0, numberOfItems);
  }

  return (
    <section className='mainpage'>
      <GridWrap>
        <div className='header-wrap'>
          <h className="header">{nickname}님의 고민을 더 들어줄 수 있는 상담사님을 추천드려요</h>
        </div>
      </GridWrap> 
        <Card searchTerm={true} consultData={consultData}/>
      <GridWrap>
        <div className='header-wrap'>
          <h className="header">박서현님의 고민을 더 들어줄 수 있는 상담사님을 추천드려요</h>
        </div>
      </GridWrap> 
      <Outlet/>
      
    </section>


  )
}

export default MainPage

