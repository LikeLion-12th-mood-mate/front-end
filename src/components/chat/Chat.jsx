import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import KeywordButton from './KeywordButton';
import Cardwrap from './Cardwrap';
import Card from './Card';
import GetChatInfo from '../../api/chat/GetChatInfo';
import { Outlet } from 'react-router-dom';
import Gridwrap from '../grid/Gridwrap';
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
function Chat() {
  const [searchTerm,setSearchTerm] = useState();
  const [consultData,setConsultData] = useState([]);
  const [results,setResults] = useState();
  const inputRef = useRef();
  const handleEnter=()=>{
    setSearchTerm(inputRef.current.value);
  }
  console.log("searchterm:",searchTerm)
  console.log("results:",results)
  useEffect(()=>{
    const getConsultData = async()=>{
      //const response = GetChatInfo();
      //console.log(response.data);
      //setConsultData(response.data)
      setConsultData(dummydata)
    }
    getConsultData();
  },[])
  useEffect(()=>{
    if(searchTerm){
      const filteredResults = consultData.filter(item=>item.name.includes(searchTerm));
      setResults(filteredResults);
    }
    else{
      
    }
  },[searchTerm])
  return (
    <div className='chat'>
      <ChatHeader inputRef={inputRef} handleEnter={handleEnter} search={searchTerm} setSearch={setSearchTerm}/>
        <Gridwrap>
         <div className='chat-wrap'>
              <KeywordButton/>
              {dummytitle.map((data)=>(
                <Cardwrap title={data.title}>
                  {searchTerm  ? <Card consultData={results}/> :<Card consultData={consultData}/>}
                </Cardwrap>
              ))}
          </div>
        </Gridwrap>
      <Outlet/>
    </div>
  )
}

export default Chat