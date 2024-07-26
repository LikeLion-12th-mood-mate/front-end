import React from 'react'

function Cardwrap(props) {
  return (
    <>
        <div className='title-wrap'>
            <h1 className='title'>{props.title}</h1>
        </div>
        
        {props.children}
    </>
  )
}

export default Cardwrap