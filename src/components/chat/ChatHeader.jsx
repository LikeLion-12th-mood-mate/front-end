import React from 'react';
import {Link} from 'react-router-dom';

import gotochat from '../../assets/chat/gotochat.svg';
import search from '../../assets/chat/search.svg';

function ChatHeader({ inputRef, searchModal, setSearchModal, handleEnter }) {
  return (
    <>
      <div className='chat-header-wrap'>
        <div className='header-title-wrap'>
            <h1 className='chat-header-title'>상담사 목록</h1>
            <Link to='/chatlist'>
              <img src={gotochat} className='gotochat-img' alt='gotochat-image' />
            </Link> 
        </div>
        <div className='search-input-wrap' onClick={()=>setSearchModal(true)}>
            <input className='search-input'  placeholder='찾고 계신 상담사님이 따로 있으신가요?'/>
            <img src={search} className='search-image'/>
        </div>
      </div>
      
    </>
    
  )
}

export default ChatHeader