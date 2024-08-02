import React from 'react'
import analist from '../../../assets/diary/analyst.svg';

function AnalystModal({handleAnalyst}) {
  return (
    <button className='analyst-modal-wrap' onClick={handleAnalyst}>
        <img src={analist} className='analyst-image'/>
        일기분석
    </button>
  )
}

export default AnalystModal