import React from 'react'

import chat from '../../../assets/chat/chatmodal.svg';
function Modal() {
  return (
    <button className='gotochat-wrap'>
        <img src={chat} alt='gotochat'/>
        바로 상담
    </button>
  )
}

export default Modal