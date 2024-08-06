import React from 'react'

function Analyst(props) {
    const [year,month,day] = props?.selectDate?.split('-').map(Number);
    console.log('선택날짜:',props.selectDate)
    const nickname = sessionStorage.getItem('nickname')
    const data = props?.analystData?.filter((item)=>item.time===props?.selectDate);
    console.log(data)
  return (
    <div className='analyst'>
        <p>{`${month}월 ${day}일 ${nickname}님의 하루는`}</p>
        <ul className='percentage-wrap'>
                {data.map((item, index) => {
                    
                    const [value1, value2] = item.analyze.split(' ').map(Number);
                    const [value3, value4] = item.analyze.split(' ').map(String);
                    return (
                        <>
                         {value3==='NaN' && value4==='NaN' ? 
                            <div>
                                <p className='none'>분셕결과 없습니다.</p>
                                <p className='none'>감정단어를 포함해주세요</p>
                            </div>:
                            <>
                             <li key={index} className='percentage'>
                            <p className='name'>긍정정인 감정</p>
                            <p className=''>{`${value1}%`}</p>
                            </li>
                            <li key={index+1} className='percentage'>
                                <p className='name'>부정정인 감정</p>
                                <p className=''>{`${value2}%`}</p>
                            </li>
                            </>
                        }
                        </>
                        
                        
                    );
                })}
        </ul>
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
    </div>
  )
}

export default Analyst