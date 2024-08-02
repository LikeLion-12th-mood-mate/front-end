import React from 'react'

import ProgramItem from './ProgramItem'

function ProgramInfo({counselor}) {
  return (
    <div className='program'>
        <h3 className='title'>{counselor?.name}님이 하고 계신 프로그램을 둘러보세요!</h3>
        <ul className='program-card-wrap'>
            {counselor?.programs?.map((item,index)=>(
                <ProgramItem key={index} counselor={item}/>
            ))}
        </ul>
       
    </div>
  )
}

export default ProgramInfo