import React from 'react'

function Advice(props) {
  const data = props?.analystData?.filter((item)=>item.time===props.date);
  return (
    <>
        <h3>오늘의 조언</h3>
        <div className='advice-wrap'>
            <h4>오늘의 조언 총평!</h4>
            {data?.map((item)=>
            {
              const [value3, value4] = item.analyze.split(' ').map(String);
              return(
                <>
                {value3==='NaN' && value4==='NaN' ?
                <div>
                <p className='none'>분셕결과 없습니다.</p>
          
            </div>
                :
                <>
                <p>{item.analysisMessage}</p>
                <p>{item.encouragementMessage}</p>
                </>  
                
              }
                  
              </>
              )
             
              
}) }
        </div>
    </>
  )
}

export default Advice