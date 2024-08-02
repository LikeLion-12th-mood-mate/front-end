import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from '../grid/Gridwrap';
import Card from '../chat/Card';
import Cardwrap from '../chat/Cardwrap';
import GetChatInfo from '../../api/chat/GetChatInfo';
import getNickName from '../../api/getNickName';


function MainPage() {
  const [consultData,setConsultData] = useState([]);
  const [searchTerm,setSearchTerm] = useState();
  const nickname = sessionStorage.getItem('nickname')
  useEffect(()=>{
    const getConsultData = async()=>{
      const response = await GetChatInfo();
      const response2 = await getNickName();
      console.log('response: ',response.data)
      sessionStorage.setItem('nickname',response2.nickname)
      setConsultData(getRandomItems(response.data, 5));
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

