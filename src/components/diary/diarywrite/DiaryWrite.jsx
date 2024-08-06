import React, { useRef, useState, useEffect } from 'react'
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
    const [isLoading,setIsLoading] = useState(false);
    const [time, setTime] = useState(5)

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

    useEffect(() => {
      let countdown;
      if (isLoading && time > 0) {
          countdown = setInterval(() => {
            setTime(prevCount => prevCount - 1);
          }, 1000);
      }
      console.log('count',time)
      return () => clearInterval(countdown); // 클린업 함수로 타이머 해제
  }, [isLoading, time]);

    const handleAnalyst = async() => {
      console.log('일기길이', textRef.current.value.length)
      //통신부분
      setIsLoading(true)
      if(textRef.current.value.length<=100){
        setTime(6);
      }
      else if(100<textRef.current.value.length &&textRef.current.value.length<=200){
        setTime(11);
      
      }
      else if(200<textRef.current.value.length && textRef.current.value.length<=300){
        setTime(17);
      
      }
      else if(300<textRef.current.value.length && textRef.current.value.length<=400){
        setTime(20);
      
      }
      else if(400<textRef.current.value.length && textRef.current.value.length<=500){
        setTime(25);
      
      }
      else if(500<textRef.current.value.length && textRef.current.value.length<=600){
        setTime(32);
      }
      else{
        setTime(40);
      }
      const response = await PostAnalyst({month:'july',time:date,content:textRef?.current?.value,analyze:'100',emotion:selectKeywords,token:token});
      
      setIsLoading(false)
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
        <AnalystModal time={time} isLoading={isLoading} setIsLoading={setIsLoading}  handleAnalyst={handleAnalyst}/>
        {modalopen ? <Modal selectKeywords={selectKeywords} setSelectKeywords={setSelectKeywords} modalopen={modalopen} setModalOpen={setModalOpen}/> : ''}
        <Outlet/>
    </section>
  )
}

export default DiaryWrite