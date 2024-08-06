import React from 'react'

function Emotion(props) {
  const data = props?.analystData?.filter((item)=>item.time===props.date);
  return (
    <div className='emotion-wrap'>
        <h3>감정상태 요약</h3>
        <ul className='percentage-wrap'>
        {data?.map((item, index) => {
                    
                    const [value1, value2] = item.analyze.split(' ').map(Number);
                    const [value3, value4] = item.analyze.split(' ').map(String);
                    return (
                        <>
                        {value3==='NaN' && value4==='NaN' ? 
                            <div className='none'>
                                <p>분셕결과 없습니다.</p>
                                <p>감정단어를 포함해주세요</p>
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
    </div>
  )
}

export default Emotion