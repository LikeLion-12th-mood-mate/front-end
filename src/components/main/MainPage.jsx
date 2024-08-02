import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from '../grid/Gridwrap';
import Card from '../chat/Card';
import Cardwrap from '../chat/Cardwrap';
import GetChatInfo from '../../api/chat/GetChatInfo';
import getNickName from '../../api/getNickName';
const asmr=[
  {
    url:'https://www.youtube.com/watch?v=cnTf2UxjGW8',
    url2:'https://www.youtube.com/embed/cnTf2UxjGW8',
    title:'Natural Forest Sounds – ASMR | Our Green Planet | BBC Earth',
    name:'BBC Earth'
  },
  {
   url:'https://www.youtube.com/watch?v=bhWJF9FlBqM',
   url2:'https://www.youtube.com/embed/bhWJF9FlBqM',
   title:'Relaxing Sound of Rain and Wind in Forest 1 Hour / Rain Drops Falling From Trees with Wind',
   name:'Relaxing Sounds Of Nature'
  },
  {url:'https://www.youtube.com/watch?v=FydpmupUpcc',
    url2:'https://www.youtube.com/embed/FydpmupUpcc',
  title:'ASMR 마음이 편안해 지는 포근한 밤소리●풀벌레 소리, 기차 소리, 밤의 백색소음 | Night Ambience Nature Crickets & Train',
  name:'asmr soupe'},
  {url:'https://www.youtube.com/watch?v=WIqe9vM4U34',
    url2:'https://www.youtube.com/embed/WIqe9vM4U34',
    title:'10분안에 마취시켜주는 수면유도음악 | 잠잘때 듣는 음악',
    name:'디노사운드 Dino.s'

  }
]


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
          <h className="header">{nickname}님의 고민을 더 들어줄 수 <br/>있는 상담사님을 추천드려요</h>
        </div>
      </GridWrap> 
        <Card searchTerm={true} consultData={consultData}/>
      <GridWrap>
        <div className='header-wrap'>
          <h className="header">{nickname}님의 마음안정을 위해<br/>
          #ASMR #자연 을 추천드려요</h>
        </div>
      </GridWrap> 
      <div className='main'>
        <div className='asmr'>
      
      {asmr.map((data)=>(
        <div className='asmr-content'>
                    <iframe
                        width="228"
                        height="136"
                        src={data.url2}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
        <div className='box'>
           <p className='title'>{data.title}        </p>
        <p className='name'>{data.name}</p> 
        </div>
        </div>
      ))}         
      </div>

    </div>

      
      <Outlet/>
      
    </section>


  )
}

export default MainPage

