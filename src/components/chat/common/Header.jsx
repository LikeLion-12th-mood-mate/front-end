import React from 'react'


import gotochat from '../../../assets/chat/gotochat.svg'
import backward from '../../../assets/backward.svg'
import { Link } from 'react-router-dom'

function Header({isVisible,link}) {
  return (
    <div className='header-wrap'>
        <Link to={`/${link}`}>
            <img src={backward} className='backward' alt='backward'/>
        </Link> 
        {isVisible ? 
            <img src={gotochat} className='gotochat' alt='gotochat'/> :
            ''     
        }
        
    </div>
  )
}

export default Header