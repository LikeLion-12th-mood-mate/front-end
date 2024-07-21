import React from 'react'
import { Outlet } from 'react-router-dom'

function Category() {
  return (
    <div>
      Category
      <Outlet/>
    </div>
  )
}

export default Category