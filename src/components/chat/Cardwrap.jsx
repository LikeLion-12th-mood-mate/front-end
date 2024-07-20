import React from 'react'

function Cardwrap(props) {
  return (
    <>
        <div className='title-wrap'>
            <h1 className='title'>{props.title}</h1>
            <p className='plus'>더보기</p>
        </div>
        
        {props.children}
    </>
  )
}

export default Cardwrap