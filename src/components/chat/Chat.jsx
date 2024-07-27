import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import KeywordButton from './KeywordButton';
import Cardwrap from './Cardwrap';
import Card from './Card';
import Search from './Search';
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
  const [results,setResults] = useState([]);
  const [kindOfKeyword,setKindOfKeyword] = useState();
  const [searchModal,setSearchModal] = useState(false)
  const inputRef = useRef();
  const handleEnter=()=>{
    console.log("handleEnter 호출됨");
    setSearchTerm(inputRef?.current?.value);
    setSearchModal(false)
  }
  console.log("searchterm:",searchTerm)
  console.log("results:",results)
  const handleKeyword=(name)=>{
    if(kindOfKeyword===name){
      setKindOfKeyword('')
    }
    else{
      setKindOfKeyword(name)
    }
  }
  

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
  },[searchTerm])
  return (
    <div className='chat'>
      {searchModal?
      <Search inputRef={inputRef} handleEnter={handleEnter} searchModal={searchModal} setSearchModal={setSearchModal}/>
      : <ChatHeader inputRef={inputRef} searchModal={searchModal} setSearchModal={setSearchModal} handleEnter={handleEnter} search={searchTerm} setSearch={setSearchTerm}/>}
      
        <Gridwrap>
         <div className='chat-wrap'>
              <KeywordButton handleKeyword={handleKeyword} kindOfKeyword={kindOfKeyword}/>
              {dummytitle.map((data)=>(
                <Cardwrap searchTerm={searchTerm} title={data.title}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}/>}
                </Cardwrap>
              ))}
          </div>
        </Gridwrap>
      {searchModal ?'' : <Outlet/>}
    </div>
  )
}

export default Chat