import React, { useEffect,useRef,useState } from 'react'
import { Outlet,Link,useNavigate } from 'react-router-dom'

import time from '../../assets/chat/time.svg'
import house from '../../assets/chat/house.svg'
import star from '../../assets/program/star.svg'
import backward from '../../assets/backward2.svg'

import GetVideo from '../../api/category/GetVideo';
import GetProgram from '../../api/category/GetProgram';
import { programdata } from './program'
import Search from '../chat/Search'
import ProgramkeyWords from './programKeywords'
import { current } from '@reduxjs/toolkit'
function Category() {
  const [video,setVideo]=useState();
  const [program,setProgram]= useState([]);
  const [isSearchModal,setIsSearchModal] = useState(false)
  const [searchTerm,setSearchTerm] = useState();
  const [results,setResults] = useState();
  const searchRef = useRef();

  const nickname = sessionStorage.getItem('nickname')
  
  
  const navigate = useNavigate();
  

  
  useEffect(()=>{
    const fetchData = async() => {
      try {
        const data = await GetVideo(); 
        //const response = await GetProgram(' ');
        console.log('프로그램 api',programdata.data)
        setProgram(getRandomItems(programdata.data,5));
        setVideo(data.data);
       
      } catch (error) {
        return new Error(error)
      }
    };

    fetchData(); // 
  },[])

  console.log(video)
  function getRandomItems(array, numberOfItems) {

    const shuffled = [...array].sort(() => 0.5 - Math.random());
    
    return shuffled.slice(0, numberOfItems);
  }

  const handleEnter=async()=>{
    console.log("handleEnter 호출됨");
    setSearchTerm(searchRef?.current?.value);
    if(searchRef?.current?.value===''){
      setIsSearchModal(false)
    }
    else{
      const response = await GetProgram(searchRef?.current?.value)
      console.log('검색결과',response.data)
      setResults(response.data)
      setIsSearchModal(false)
    }
    
  }
  
   const handleClick = (identifier,id) => {
    if(identifier==='video'){
      navigate(`/video/${id}`);
    }
    else{
      navigate(`/program/${id}`);
    }
   };
   
  return (
    <>
      {isSearchModal?
      <Search dummydata={ProgramkeyWords} inputRef={searchRef} handleEnter={handleEnter} searchModal={isSearchModal} setSearchModal={setIsSearchModal}/>
      : searchTerm ? 
      <div className='category active'>
        <img src={backward} onClick={()=>setSearchTerm('')} className='backward' alt='backward' />
        <h2 className='category-search-title'>'{searchRef?.current?.value}' 프로그램</h2>
         <div className='search-container'>
            <input onClick={()=>setIsSearchModal(true)} className='input'type='text' placeholder="요즘 뜨는 프로그램의 키워드는 '대인관계'"></input>
            <img className='search-logo'src='/src/assets/chat/search.svg' alt='logo'></img>
        </div>
        <div className='chat-search-result'>
          {results?.data?.length===0 ? 
            <p className='not-research'>검색결과가 없습니다.</p>
            :
            results?.data?.map((data)=>(
              <div key={data.id}className='chat-content active' 
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
              
            ))
          }
       
      
      </div>

      </div>
      :
      <div className='category'>
      <>
       <div className='search-container'>
        <input onClick={()=>setIsSearchModal(true)} className='input'type='text' placeholder="요즘 뜨는 프로그램의 키워드는 '대인관계'"></input>
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
      </>
      
     
      <Outlet/>
      </div>}
    </>
  
   
  )
}

export default Category