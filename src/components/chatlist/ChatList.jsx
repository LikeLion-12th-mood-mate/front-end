import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Gridwrap from '../grid/Gridwrap';
import Header from '../chat/common/Header';
import GetChatList from '../../api/chatlist/GetChatList';
import ChatListItem from './ChatListItem';
const dummydata = [
    {
        id:1,
        name:"최수빈",
        content: '안녕하세요 상담사 최수빈입니다.',
        time:'9:31',
        count:1
    },
    {
        id:2,
        name:"한유진",
        content: '상담을 종료하겠습니다. 감사합니다.',
        time:'8:17',
        count:11
    }
]
function ChatList() {
    const [chatList,SetChatList] = useState([]);
    useEffect(()=>{
        const getConsultList=()=>{
            // const response = GetChatList();
            // SetChatList(response.data)
            // console.log(response.data)
            SetChatList(dummydata);
        }
        getConsultList();
    },[])
  return (
    <section className='chatlist'>
        <Gridwrap>
            <Header isVisible={true} link={-1}/>
            <h3>진행중인 상담</h3>
            <ul className='chatlist-card-wrap'>
                {chatList.map((item)=>(
                    <Link to={`/chat/${item.id}`}>
                        <ChatListItem item={item}/>
                    </Link> 
                ))}
            </ul>
            
        </Gridwrap>
    </section>
  )
}

export default ChatList