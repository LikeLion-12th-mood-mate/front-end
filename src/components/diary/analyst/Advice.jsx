import React from 'react'

function Advice(props) {
  const data = props?.analystData?.filter((item)=>item.time===props.date);
  return (
    <>
        <h3>오늘의 조언</h3>
        <div className='advice-wrap'>
            <h4>오늘의 조언 총평!</h4>
            {data?.map((item)=>(
              <>
                <p>{item.analysisMessage}</p>
                <p>{item.encouragementMessage}</p>
              </>
              
            )) }
        </div>
    </>
  )
}

export default Advice