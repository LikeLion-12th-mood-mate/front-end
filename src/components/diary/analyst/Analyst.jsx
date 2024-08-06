import React, { useEffect, useState } from 'react'
import Header from '../../chat/common/Header'
import { useParams } from 'react-router-dom';
import Gridwrap from '../../grid/Gridwrap';
import Emotion from './Emotion';
import Advice from './Advice';
import GetCalendar from '../../../api/diary/GetCalendar';
import Loading from '../../loading/loading';
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
                 <Advice analystData={analystData} date={date}/>
             </Gridwrap>
         </div>
     </section>
    }
    </>
   
  )
}

export default Analyst