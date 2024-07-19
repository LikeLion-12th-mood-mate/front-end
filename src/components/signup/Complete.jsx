import React from 'react'

import highfive from '../../assets/signup/highfive.svg'
import { Link } from 'react-router-dom'
function Complete() {
  return (
    <div className='complete'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className='complete-wrap'>
                        <h1 className='complete-title'>회원가입을 완료했어요<br/>MoodMate에 오신걸 환영해요</h1>
                        <span className='complete-image' style={{backgroundImage:`url(${highfive})`}}/>
                        <Link to='/'>
                            <button className='complete-button' >다음</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Complete