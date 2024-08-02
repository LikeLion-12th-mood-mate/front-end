import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import Gridwrap from '../grid/Gridwrap'
import GetProgDt from '../../api/category/GetProgDt'
import backward from '../../assets/backward2.svg'
import star from '../../assets/program/star.svg'
import greentime from '../../assets/program/greentime.svg'
import greenhouse from '../../assets/program/greenhouse.svg'
import GetCounselor from '../../api/chat/GetCounselor'

function ProgramDetail() {
  const [programData,setProgramData] = useState()
  const [counselorData,setCounselorData] = useState()
  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    const fetchProgramData= async()=>{
      const response = await GetProgDt(id)
      const response2 = await GetCounselor(response.data.data.counselorId)
      console.log("api:",response.data.data)
      console.log('상담사 정보',response2)
      setProgramData(response.data.data)
      setCounselorData(response2.data)

    }
    fetchProgramData();
  },[])
  return (
    <section className='programdetail'>
      <Gridwrap>
       <Link to='/program'>
          <img src={backward} className='backward' alt='뒤로가기' />
        </Link> 
        <h1 className='title'>{programData?.name}</h1>
        <div className='profile-wrap'>
          <img src={counselorData?.imgUrl} className='profile'/>
          <div className='desc-wrap'>
            <div className='star-wrap'>
              <img src={star} className='star' alt='star'/>
              <p className='rating'>{programData?.rating}</p>
            </div>
            <h4 className='name'>{counselorData?.name}</h4>
            <p className='desc'>{counselorData?.comment}</p>
          </div>
        </div>
      </Gridwrap>
      `<div className='information'>
          <div className='time-place'>
            <img src={greentime} alt='time'/>
            <p>{programData?.time}</p>
          </div>
          <div className='time-place'>
            <img src={greenhouse} alt='time'/>
            <p>{programData?.place}</p>
          </div>
          <p className='detail'>상세 주소는 프로그램 신청이 완료되면 발송됩니다</p>
          
          <ul className='detail-wrap'>
              {programData?.details.map((item)=>(
                 <li className='item-wrap'>
                  <p className='time'>{item.time}</p>
                  <div className='desc-wrap'>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
          </ul>
          
      </div>
      <div className='review'>
        <h3 className='title'>이 프로그램의 솔직후기</h3>
        <ul className='card-wrap'> 
          {programData?.reviews?.map((item)=>(
            <li className='card'>
                <div className='header-wrap'>
                  <div className='review-profile-wrap'>
                    <span className='review-profile'/>
                    <p className='name'>익명의 고라니</p>
                  </div>
                  <div className='star-wrap'>
                    <img src='' className='star'/>
                    <p className='rating'>{item.rating}</p>
                  </div>
                </div>
              </li>
          ))} 
              
        </ul>
      </div>
      <Outlet/>
    </section>
  )
}

export default ProgramDetail