import React, { useEffect,useState } from 'react'
import { Outlet,Link,useNavigate } from 'react-router-dom'

import time from '../../assets/chat/time.svg'
import house from '../../assets/chat/house.svg'
import star from '../../assets/program/star.svg'
import GetVideo from '../../api/category/GetVideo';
import GetProgram from '../../api/category/GetProgram';
const dummyConsult= [
  {
    "id": 7,
    "name": "편안한 관계 형성을 위한 대인관계 의사소통 훈련",
    "time": "매주 (목) 19:00-21:00",
    "place": "강남역 인근",
    "rating": 3.8,
    "keyWords": [
      {
        "word": "대인관계"
      },
      {
        "word": "의사소통"
      },
      {
        "word": "관계 형성"
      }
    ]
  },
  {
    "id": 8,
    "name": "대인관계 신뢰 회복을 목표로 하는 대인관계 기술 향상 워크숍",
    "time": "매주 (목) 19:00-21:00",
    "place": "선릉역 근처",
    "rating": 3.9,
    "keyWords": [
      {
        "word": "관계 형성"
      },
      {
        "word": "신뢰 회복"
      },
      {
        "word": "대인관계 기술"
      }
    ]
  },
  {
    "id": 9,
    "name": "천천히 같이 해보는 대인관계 의사소통 훈련",
    "time": "매주 (목) 18:00-20:00",
    "place": "강남역 근처",
    "rating": 3.9,
    "keyWords": [
      {
        "word": "의사소통"
      },
      {
        "word": "훈련"
      },
      {
        "word": "대인관계"
      }
    ]
  }
]


function Category() {
  const [video,setVideo]=useState();
  const [program,setProgram]= useState([]);
  const nickname = sessionStorage.getItem('nickname')
  useEffect(()=>{
    const fetchData = async() => {
      try {
        const data = await GetVideo(); 
        const response = await GetProgram();
        console.log('프로그램 api',response)
        setProgram(dummyConsult);
        setVideo(data.data);
        //console.log(video)
      } catch (error) {
        return new Error(error)
      }
    };

    fetchData(); // 
  },[])
  //console.log(video)
  const navigate = useNavigate();

   
  console.log(video)
   const handleClick = (identifier,id) => {
    if(identifier==='video'){
      navigate(`/video/${id}`);
    }
    else{
      navigate(`/program/${id}`);
    }
   };
   
  return (
    <div className='category'>
      <div className='search-container'>
        <input className='input'type='text' placeholder="요즘 뜨는 프로그램의 키워드는 '대인관계'"></input>
        <img className='search-logo'src='/src/assets/chat/search.svg' alt='logo'></img>
      </div>

      <p className='text1'>{nickname}님에게 추천드리는<br></br>전문 상담사 프로그램</p>
      <div className='chat'>
        {program.map((data)=>(
          <div key={data.id}className='chat-content' 
          onClick={()=>handleClick('program',data.id)}
          >
            <p className='name'>{data.name}</p>
            <div className='time-place-wrap'>
              <div className='time-wrap'>
                <img src={time} className='alarm' alt='alarm'/>
                <p className='time'>{data.time}</p>
              </div>
              <div className='time-wrap'>
                <img src={house} className='alarm' alt='alarm'/>
                <p className='time'>{data.place}</p>
              </div>
              <div className='time-wrap'>
                <img src={star} className='alarm' alt='alarm'/>
                <p className='time'>{data.rating}</p>
              </div>
            </div>
           
            <ul className='keyword-wrap'>
              {data?.keyWords?.map((item)=>
                <li className='keyword'>{item.word}</li>
              )}
            </ul>

          </div>
          
        ))}
      
      </div>
      <p className='text2'>{nickname}님에게 추천드리는 <br></br>영상 프로그램을 확인해보세요!</p>
      <div className='video'>
        

      
        {video?.map((data)=>{
           const videoUrl = data.url; // 예: "https://www.youtube.com/watch?v=fXnYSSzlwKc"
           const videoId = videoUrl.split('v=')[1]?.split('&')[0];
           const url=`https://www.youtube.com/embed/${videoId}`
          return(
          <div key={data.id}className='video-content' onClick={()=>handleClick('video',data.id)}>
            <iframe
  width="228"
  height="136"
  src={url}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

            {/* <ifram src='url' width="100"height="100"></ifram> */}
            {/* <p className='url'>{data.url}</p> */}
            <div className='box' >
              <p className='title'>{data.title}</p>
              <p className='name'>{data.name}</p>
            </div>

          </div>
        )})} 
        
      </div>
      <Outlet/>
    </div>
  )
}

export default Category