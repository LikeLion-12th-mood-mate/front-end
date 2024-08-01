import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'

import Profile from './Profile';
import Header from '../common/Header';
import Gridwrap from '../../grid/Gridwrap';
import ProgramInfo from './ProgramInfo';
import Modal from './modal';
import getCounselor from '../../../api/chat/GetCounselor';
import getChatFind from '../../../api/chat/conversation/getChatFind';
import getChatRoom from '../../../api/chat/conversation/getChatRoom';
import Loading from '../../loading/loading';

function ConsultDetail() {
  const [counselor, setCounselor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams()
  const navigate = useNavigate()
  const token = sessionStorage.getItem('token')
  useEffect(()=>{
    const getCounselorData=async()=>{
      const response = await getCounselor(id);
        setCounselor(response.data);
        setIsLoading(false);
        console.log(response.data)
       

    }
    getCounselorData();
  },[])
  const handleModalClick=async()=>{
    const response =await getChatRoom({query:counselor.name,token:token});
    const response2 = await getChatFind({query:response.data,token:token});
    console.log('방만들기 ID:',response.data)
    console.log('방찾기 API',response2.data)
    if(response.data===response2.data.roomId){
      sessionStorage.setItem('roomId',response.data)
      navigate(`/chat/${counselor.name}`)
    }
  }
  console.log(id)
  return (
    <>
    {isLoading ? 
    <Loading/> : 
    <div className='counselor'>
    <Gridwrap>
      <Header isVisible={true} link={'consult'} />
      <Profile counselor={counselor}/>
    </Gridwrap>  
    <div className='counselor-program-wrap'>
      <ProgramInfo counselor={counselor}/>
    </div>
    <Modal handleModalClick={handleModalClick}/>
    
    <Outlet/>
  </div>}
    </>
    
  )
}

export default ConsultDetail