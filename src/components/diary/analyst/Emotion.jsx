import React from 'react'

function Emotion(props) {
  return (
    <div className='emotion-wrap'>
        <h3>감정상태 요약</h3>
        <ul className='percentage-wrap'>
            {props?.analystData?.emotion?.map((item)=>(
                <li className='percentage'>
                    <p className='name'>{item.emotion}</p>
                    <p className=''>{item.percentage}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Emotion