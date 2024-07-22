import React from 'react'

function Gridwrap({children}) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-5'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Gridwrap