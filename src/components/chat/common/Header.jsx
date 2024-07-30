import React from 'react'
import { Link } from 'react-router-dom'

import gotochat from '../../../assets/chat/gotochat.svg'
import backward from '../../../assets/backward2.svg'
import forward from '../../../assets/forward.svg'

function Header({isVisible,link,isNext,month,day,disconnect}) {
  return (
    <div className='header-wrap'>
        {<Link to={link===-1 ? -1 :`/${link}`}>
            <img src={backward} onClick={disconnect} className='backward' alt='backward'/>

        </Link> }
        {month&&day ? <p className='date'>{`${month}월 ${day}일`}</p>: ''}
        {isVisible ? 
            <Link to='/chatlist'>
              <img src={gotochat} className='gotochat' alt='gotochat'/>
            </Link>  :
            ''     
        }
        {isNext ? 
            <Link to='/chatlist'>
              <img src={forward} className='backward' alt='gotochat'/>
            </Link>  :
            ''     
        }
        
        
    </div>
  )
}

export default Header