import React from 'react'


import gotochat from '../../../assets/chat/gotochat.svg'
import backward from '../../../assets/backward.svg'
import { Link } from 'react-router-dom'

function Header({isVisible,link}) {
  return (
    <div className='header-wrap'>
        <Link to={link===-1 ? -1 :`/${link}`}>
            <img src={backward} className='backward' alt='backward'/>
        </Link> 
        {isVisible ? 
            <Link to='/chatlist'>
              <img src={gotochat} className='gotochat' alt='gotochat'/>
            </Link>  :
            ''     
        }
        
    </div>
  )
}

export default Header