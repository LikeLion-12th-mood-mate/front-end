import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import getNickName from '../../api/getNickName'

function MainPage() {
  const footerstate='home'
  useEffect(()=>{
    const getfetchData= async()=>{
      const response=await getNickName();
      sessionStorage.setItem('nickname',response.nickname)
      console.log(response.nickname)
    }
    getfetchData()
;  },[])
  return (
    <div>
      MainPage
      <Outlet context={{footerstate}}/>
    </div>
  )
}

export default MainPage