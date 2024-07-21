import React from 'react'
import { Outlet } from 'react-router-dom'

function MainPage() {
  const footerstate='home'
  return (
    <div>
      MainPage
      <Outlet context={{footerstate}}/>
    </div>
  )
}

export default MainPage