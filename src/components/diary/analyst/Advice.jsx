import React from 'react'

function Advice(props) {
  return (
    <>
        <h3>오늘의 조언</h3>
        <div className='advice-wrap'>
            <h4>오늘의 조언 총평!</h4>
            <p>{props.analystData?.content?.content}</p>
        </div>
    </>
  )
}

export default Advice