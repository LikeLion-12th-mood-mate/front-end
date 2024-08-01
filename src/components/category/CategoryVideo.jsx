import React, { useEffect,useState } from 'react'
import {Outlet,useParams} from 'react-router-dom';
//import 'category_video.scss';
import GetVideoOne from '../../api/category/GetVideoOne';



function CategoryVideo() {
  const {id}=useParams()
  //console.log(id)
  const [data,setData]=useState();
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await GetVideoOne(id); // GetChatInfo에서 데이터를 가져옵니다.
        //console.log(data)
        setData(data.data);
       // console.log(data)
        
      } catch (err) {
        setError(err.message); // 에러 메시지를 상태에 저장합니다.
      }
    };

    fetchData(); // 비동기 함수를 호출합니다.
  },[])
  //const url='https://www.youtube.com/watch?v=ioChjnF3kls'
  //const url2='https://img.youtube.com/vi/ioChjnF3kls/mqdefault.jpg'
  
  // if (data) {
  //   console.log(data.url)
  //   const videoUrl = data.url; // "https://www.youtube.com/watch?v=fXnYSSzlwKc"
  // const videoId = videoUrl.split('v=')[1].split('&')[0];
  // console.log(videoId);
  // url=`https://img.youtube.com/vi/${videoId}/mqdefault.jpg` // "fXnYSSzlwKc" //데이터가 로드되지 않은 경우 로딩 메시지 표시
  // }
  if (!data) {
    return <div>Loading...</div>; // 데이터가 로드되지 않은 경우 로딩 메시지 표시
  }
  
  // 데이터가 로드된 후 URL, name, title 추출
  const videoUrl = data.url; // "https://www.youtube.com/watch?v=fXnYSSzlwKc"
  const videoId = videoUrl.split('v=')[1].split('&')[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className='category-video'>
      <img className='back'src='/src/assets/category/ci_caret-left-sm.svg'></img>
      <p>{data.title}[{data.name}]</p>
      <img className='ssumnail'src={thumbnailUrl}></img>
      

      <Outlet/>
    </div>
  );
};

export default CategoryVideo;