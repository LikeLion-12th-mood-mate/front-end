import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import KeywordButton from './KeywordButton';

function Chat() {
  const [search,setSearch] = useState();
  return (
    <div className='chat'>
      <ChatHeader/>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='chat-wrap'>
              <KeywordButton/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat