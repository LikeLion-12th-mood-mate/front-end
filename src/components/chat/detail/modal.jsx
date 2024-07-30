import React from 'react'

import chat from '../../../assets/chat/chatmodal.svg';
function Modal({handleModalClick}) {
  return (
    <button type='button' className='gotochat-wrap' onClick={handleModalClick}>
        <img src={chat} alt='gotochat'/>
        바로 상담
    </button>
  )
}

export default Modal