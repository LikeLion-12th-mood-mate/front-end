import React from 'react'
import analist from '../../../assets/diary/analyst.svg';
import Loading from '../../loading/loading';

function AnalystModal({time,handleAnalyst,isLoading}) {
  return (
    <button className='analyst-modal-wrap' onClick={handleAnalyst}>
      {isLoading ?
      <>
        <p className='analyt-time'>분석시간<br/>00:00:{time}</p> 
      <div className="progress-bar-gauge"/>
      </>


        : <>
           <img src={analist} className='analyst-image'/>
           일기분석
        </>}
        
       
    </button>
  )
}

export default AnalystModal