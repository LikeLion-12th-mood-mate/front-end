import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import KeywordButton from './KeywordButton';
import Cardwrap from './Cardwrap';
import Card from './Card';
import Search from './Search';
import GetChatInfo from '../../api/chat/GetChatInfo';
import { Outlet } from 'react-router-dom';
import Gridwrap from '../grid/Gridwrap';
import Loading from '../loading/loading';

function Chat() {
  const [searchTerm,setSearchTerm] = useState();
  const [consultData,setConsultData] = useState([]);
  const [results,setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [kindOfKeyword,setKindOfKeyword] = useState();
  const [searchModal,setSearchModal] = useState(false);
  const inputRef = useRef();
  const handleEnter=async()=>{
    console.log("handleEnter 호출됨");
    setSearchTerm(inputRef?.current?.value);
    const response = await GetChatInfo(inputRef?.current?.value)
    console.log('검색결과',response.data)
    setResults(response.data)
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
      const response = await GetChatInfo();
      setConsultData(response.data)
      setIsLoading(false)
    }
    getConsultData();
  },[])
  console.log('consultdata:' , consultData)

  return (
    <div className='chat'>
      {searchModal?
      <Search inputRef={inputRef} handleEnter={handleEnter} searchModal={searchModal} setSearchModal={setSearchModal}/>
      : <ChatHeader inputRef={inputRef} searchModal={searchModal} setSearchModal={setSearchModal} handleEnter={handleEnter} search={searchTerm} setSearch={setSearchTerm}/>}
      
        <Gridwrap>
         <div className='chat-wrap'>
              <KeywordButton handleKeyword={handleKeyword} kindOfKeyword={kindOfKeyword}/>
              {searchTerm ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/>:
              <>
              {
                isLoading ? <Loading/>
                :
                <>
                <Cardwrap searchTerm={searchTerm} title={'아이와 마찰이 너무 심할 때 필요한 전문가'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData} category='아동/청소년 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'직장에서 벌어진 일들 여기에 다 털어놓고 가세요'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='직장 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'나의 배우자와 소통이 어려울때 필요한 전문가'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='부부 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'불안에 대한 모든 고민을 도와주시는 전문가'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='불안 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'우울증에 대한 모든 고민을 도와주시는 전문가'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='우울증 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'지금, 중독으로 힘들지는 않으신가요?'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='중독 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'스트레스에 대한 모든 고민을 도와주시는 전문가'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='스트레스 상담'/>}
              </Cardwrap>
              <Cardwrap searchTerm={searchTerm} title={'여러분은 어디에서나 필요한 사람입니다'}>
                  {searchTerm  ? results.length<=0 ? '검색결과가 없습니다' :<Card searchTerm={searchTerm} consultData={results}/> :<Card consultData={consultData}category='자존감 상담'/>}
              </Cardwrap>
                </>
                
              }
              
              </>
              }
          </div>
        </Gridwrap>
      {searchModal ?'' : <Outlet/>}
    </div>
  )
}

export default Chat

