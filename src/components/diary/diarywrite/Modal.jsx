import React from 'react'
import close from '../../../assets/diary/close.svg'
import { positive,depressed,anxiety,anger,panic } from './EmotionKeyword';
import KeywordList from './KeywordList';
function Modal(props) {
  return (
    <div className='diarywrite-modal'>
      <div className='close-wrap'>
        <img src={close} className='close' alt='close' onClick={()=>props.setModalOpen(!props.modalopen)}/>
      </div>
      <div className='scroll-wrap'>
        <KeywordList selectKeywords={props.selectKeywords} setSelectKeywords={props.setSelectKeywords} keywords={positive}/>
        <KeywordList selectKeywords={props.selectKeywords} setSelectKeywords={props.setSelectKeywords} keywords={depressed}/>
        <KeywordList selectKeywords={props.selectKeywords} setSelectKeywords={props.setSelectKeywords} keywords={anxiety}/>
        <KeywordList selectKeywords={props.selectKeywords} setSelectKeywords={props.setSelectKeywords} keywords={anger}/>
        <KeywordList selectKeywords={props.selectKeywords} setSelectKeywords={props.setSelectKeywords} keywords={panic}/>
      </div>
    </div>
      
  )
}

export default Modal