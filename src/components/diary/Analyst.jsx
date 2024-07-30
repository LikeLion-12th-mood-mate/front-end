import React from 'react'

function Analyst(props) {
    const [year,month,day] = props?.selectDate?.split('-').map(Number);
    const nickname = sessionStorage.getItem('nickname')
  return (
    <div className='analyst'>
        <p>{`${month}월 ${day}일 ${nickname}님의 하루는`}</p>
        <ul className='percentage-wrap'>
                {props?.analystData?.map((item, index) => {
     
                    const [value1, value2] = item.analyze.split(' ').map(Number);

                    return (
                        <>
                        <li key={index} className='percentage'>
                            <p className='name'>긍정정인 감정</p>
                            <p className=''>{`${value1}`}</p>
                        </li>
                        <li key={index} className='percentage'>
                            <p className='name'>부정정인 감정</p>
                            <p className=''>{`${value2}`}</p>
                        </li>
                        </>
                        
                        
                    );
                })}
        </ul>
        <div className='advice-wrap'>
            <h4>오늘의 조언 총평!</h4>
            <p>{props.analystData?.content?.content}</p>
        
        </div>
    </div>
  )
}

export default Analyst