import React from 'react'

function ChatListItem({item,handleOnclick}) {
  
  return (
    <li key={item?.id} className='chatlist-card' onClick={handleOnclick}>
        {/* <img src='' alt='progile'/> */}
        <div className='text-wrap'>
            <div className='text-title-wrap'>
                <h3 className='name'>{item?.opponentUser}</h3>
                <p className='time'>{item?.time}</p>
            </div>
           
            <div className='text-desc-wrap'>
                <p className='content'>{item?.content}</p>
                <span className='count'>{item?.count}</span>
            </div>
            
            
        </div>
        
    </li>
  )
}

export default ChatListItem