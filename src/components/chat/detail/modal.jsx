import React from 'react'

import chat from '../../../assets/footer/notconsult.svg';
function Modal() {
  return (
    <div className='gotochat-wrap'>
        <img src={chat} alt='gotochat'/>
        <p>바로 상담</p>
    </div>
  )
}

export default Modal