import React, { useEffect,useState } from 'react'
import { Outlet,Link,useNavigate } from 'react-router-dom'
//import './category.scss'
//import Alarm from './assets/ci_alarm.svg'
import GetVideo from '../../api/category/GetVideo';

const dummyConsult=[
  {
    id:1,
    title:'그림 그리기로 알아보는 나의 심리상담사의 1:1 집중 분석 포함',
    when:'매주 (수) 20:00~22:00',
    where:'선릉역',
    star:4.9,
    etc:['자세한 조언','그림','심리치료']
  },
  {
    id:2,
    title:'그림 그리기로 알아보는 나의 심리상담사의 1:1 집중 분석 포함',
    when:'매주 (수) 20:00~22:00',
    where:'선릉역',
    star:4.9,
    etc:['자세한 조언','그림','심리치료']
  },
  {
    id:3,
    title:'그림 그리기로 알아보는 나의 심리상담사의 1:1 집중 분석 포함',
    when:'매주 (수) 20:00~22:00',
    where:'선릉역',
    star:4.9,
    etc:['자세한 조언','그림','심리치료']
  },
  {
    id:4,
    title:'그림 그리기로 알아보는 나의 심리상담사의 1:1 집중 분석 포함',
    when:'매주 (수) 20:00~22:00',
    where:'선릉역',
    star:4.9,
    etc:['자세한 조언','그림','심리치료']
  },
  {
    id:5,
    title:'그림 그리기로 알아보는 나의 심리상담사의 1:1 집중 분석 포함',
    when:'매주 (수) 20:00~22:00',
    where:'선릉역',
    star:4.9,
    etc:['자세한 조언','그림','심리치료']
  },
  {
    id:6,
    title:'그림 그리기로 알아보는 나의 심리상담사의 1:1 집중 분석 포함',
    when:'매주 (수) 20:00~22:00',
    where:'선릉역',
    star:4.9,
    etc:['자세한 조언','그림','심리치료']
  }
  ]


function Category() {
  const [video,setVideo]=useState();
  const nickname = sessionStorage.getItem('nickname')
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await GetVideo(); // 
        //console.log(data)
        setVideo(data.data);
        //console.log(video)
      } catch (err) {
        setError(err.message); // 
      }
    };

    fetchData(); // 
  },[])
  //console.log(video)
  const navigate = useNavigate();

   
  console.log(video)
   const handleClick = (id) => {
   
     navigate(`/program/${id}`);
   };
  return (
    <div className='category'>
      <div className='search-container'>
        <input className='input'type='text' placeholder="요즘 뜨는 프로그램의 키워드는 '대인관계'"></input>
        <img className='search-logo'src='/src/assets/chat/search.svg' alt='logo'></img>
      </div>
      <p className='text1'>{nickname}님에게 추천드리는<br></br>전문 상담사 프로그램</p>
      <div className='chat'>
        {dummyConsult.map((data)=>(
          
          
          
          
          <div key={data.id}className='chat-content' 
          onClick={()=>handleClick(data.id)}
          >
            <p className='p'>{data.title}</p>
            <div className='div1'>
              <img src='/src/components/category/assets/ci_alarm.svg'className='alarm' alt='alarm'></img>
            </div>
            <div className='div2'>
              div2
            </div>

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
          <div key={data.id}className='video-content' onClick={()=>handleClick(data.id)}>
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