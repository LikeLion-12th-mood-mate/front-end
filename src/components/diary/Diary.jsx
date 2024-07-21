import React from 'react'
import { Outlet } from 'react-router-dom'

function Diary() {
  return (
    <div>
      Diary
      <Outlet />
    </div>
  )
}

export default Diary