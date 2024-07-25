import React from 'react'

function Analyst(props) {
    const [year,month,day] = props?.selectDate?.split('-').map(Number);
  return (
    <div className='analyst'>
        <p>{`${month}월 ${day}일 박서현님의 하루는`}</p>
        <ul className='percentage-wrap'>
            {props?.analystData?.emotion?.map((item)=>(
                <li className='percentage'>
                    <p className='name'>{item.emotion}</p>
                    <p className=''>{item.percentage}</p>
                </li>
            ))}
        </ul>
        <div className='advice-wrap'>
            <h4>오늘의 조언 총평!</h4>
            <p>{props.analystData?.content?.content}</p>
        
        </div>
    </div>
  )
}

export default Analyst