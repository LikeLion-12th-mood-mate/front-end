import React from 'react'

import time from '../../../assets/chat/time.svg'
import house from '../../../assets/chat/house.svg'
function ProgramItem({counselor}) {
  return (
    <li className='program-card'>
                <h3 className='program-title'>{counselor?.name}</h3>
                    <div className='time-place-wrap'>
                        <img src={time} alt='time'/>
                        <p>매주 (수) {counselor?.programtime}</p>
                        <img src={house} alt='house'/>
                        <p>{counselor?.programplace}으로 진행</p>
                    </div>
                    <p className='program-desc'>
                        {counselor?.programcontent}
                    </p>
           
    </li>
  )
}

export default ProgramItem