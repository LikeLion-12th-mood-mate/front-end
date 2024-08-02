import React from 'react'

import modal from '../../../assets/diary/modal.svg';
import modalopen from '../../../assets/diary/modalopen.svg';
function DiaryContent(props) {
  return (
    <div className='diarycontent-wrap'>
      <div className='content-header-wrap'>
        <h3 className='content-header'>{props.nickname}님의 하루는 어땠나요?</h3>
        <img src={props.modalopen? modalopen : modal} className='modalimg' alt='modal' onClick={()=>props.setModalOpen(!props.modalopen)}/>
      </div>
      <div className='keyword-wrap'>
        {props.selectKeywords.map((item)=>(
          <button className='keyword'>{item}</button>
        ))}
      </div>
      <textarea className='input-content' ref={props.textRef} placeholder={`나의 '감정'에 집중해 일기를 작성해봐요`}/>
    </div>
  )
}

export default DiaryContent