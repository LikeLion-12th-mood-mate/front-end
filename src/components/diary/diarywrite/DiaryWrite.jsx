import React, { useRef, useState } from 'react'
import Gridwrap from '../../grid/Gridwrap'
import Header from '../../chat/common/Header'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import DiaryContent from './DiaryContent';
import Modal from './Modal';
import AnalystModal from './AnalystModal';
import PostAnalyst from '../../../api/diary/PostAnalyst';

function DiaryWrite() {
    const [modalopen,setModalOpen] = useState(false); 
    const [selectKeywords,setSelectKeywords] = useState([]);
    const nickname=sessionStorage.getItem('nickname');
    const token = sessionStorage.getItem('token')
    const textRef = useRef();
    const {date} = useParams();
    const [year,month,day] = date.split('-').map(Number);
    const strToMonth = toString(month)
    const navigate = useNavigate()
    if(modalopen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    console.log(date)
    console.log(token)
    const handleAnalyst = async() => {
      //통신부분
      const response = await PostAnalyst({month:'july',time:date,content:textRef?.current?.value,analyze:'100',emotion:selectKeywords,token:token});
      //const response = await PostAnalyst({month:strToMonth,time:date,content:textRef?.current?.value, analyze:'100', emotion:selectKeywords,token:token});
      console.log('post결과',response)
      console.log(selectKeywords)
      console.log(textRef.current.value)
      navigate(`/diary/${date}/analyst`)
    }
  return (
    <section className={modalopen ? 'diarywrite active' : 'diarywrite'}>
      <div className={modalopen ? 'bg-dark':''}/>
        <div className='header-bg'>
            <Gridwrap>
                <Header link={-1} isNext={true} month={month} day={day}/>
                <DiaryContent nickname={nickname} textRef={textRef} selectKeywords={selectKeywords} modalopen={modalopen} setModalOpen={setModalOpen}/>
            </Gridwrap>
        </div>
        <AnalystModal  handleAnalyst={handleAnalyst}/>
        {modalopen ? <Modal selectKeywords={selectKeywords} setSelectKeywords={setSelectKeywords} modalopen={modalopen} setModalOpen={setModalOpen}/> : ''}
        <Outlet/>
    </section>
  )
}

export default DiaryWrite