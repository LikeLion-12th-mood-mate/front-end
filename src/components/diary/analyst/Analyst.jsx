import React, { useEffect, useState } from 'react'
import Header from '../../chat/common/Header'
import { useParams } from 'react-router-dom';
import Gridwrap from '../../grid/Gridwrap';
import Emotion from './Emotion';
import Advice from './Advice';
import GetCalendar from '../../../api/diary/GetCalendar';
import Loading from '../../loading/loading';
const dummydata={
    emotion:[
        {
            emotion:'행복',
            percentage:'40%'
        },
        {
            emotion:'슬픔',
            percentage:'30%'
        },
        {
            emotion:'화남',
            percentage:'10%'
        },
        {
            emotion:'부끄러움',
            percentage:'20%'
        },
    ],
    content:{
        content:'예시: "갑자기 생각지도 못한 문제들이 발생해서 두려움이 밀려왔다. 이 문제를 해결하지 못하면 큰일 날 것 같았고, 모든 게 무너질 것만 같았다."조언: 문제가 발생했을 때 두려움을 느끼는 것은 자연스러운 반응입니다. 그러나 두려움에 사로잡히지 않도록 하는 것이 중요합니다. 문제를 작은 단계로 나누어 해결해 보세요. 동료들과 함께 문제를 해결하려고 노력한 것은 좋은 접근입니다. 지속적으로 협력하고 소통하며 해결책을 모색하는 것이 중요합니다'
    }
}
function Analyst() {
    const [analystData,setAnalystData]= useState();
    const [isLoading, setIsLoading] = useState(true);
    const {date} = useParams();
    const token = sessionStorage.getItem('token')
    const [year,month,day] = date.split('-').map(Number);
    useEffect(()=>{
        const getAnalyst=async()=>{
            const response=await GetCalendar({token:token});
            setAnalystData(response);
            setIsLoading(false);
            console.log(response)
            //setAnalystData(dummydata)
        }
        getAnalyst();
    },[])
  return (
    <>
    {isLoading ? <Loading/> : 
         <section className='analyst'>
         <div className='header-bg'>
             <Gridwrap>
                 <Header month={month} day={day} link={'diary'} isNext={true}/>
                 <Emotion analystData={analystData} date={date}/>
                 <Advice analystData={analystData}/>
             </Gridwrap>
         </div>
     </section>
    }
    </>
   
  )
}

export default Analyst