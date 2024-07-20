import React from 'react'


function FooterItem(props) {
  return (
        <div className='badge-wrap'>
            <img src={props.badge} className='badge' alt='home'/>
            <p>{props.name}</p>
        </div>
   
  )
}

export default FooterItem