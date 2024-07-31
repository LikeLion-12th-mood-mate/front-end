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
    const token = sessionStorage.getItem('token')
    const nickName = sessionStorage.getItem('nickname')
    const handleOnclick =(roomId) => {
        sessionStorage.setItem('roomId',roomId)

    }
    const processedChatList = chatList.map((item) => {
        const lastHistory = item.histories.length > 0 ? item.histories[item.histories.length - 1] : null;
        const lastMessage = lastHistory ? lastHistory.message : '메시지가 없습니다.';
        const lastTime = lastHistory ? new Date(lastHistory.createdAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '';
        const unreadCount = item.histories.reduce((count, history) => {
            if (history.sender !== nickName && history.readCount === 1) {
                return count + 1;
            }
            return count;
        }, 0);
        return {
            ...item,
            content: lastMessage,
            time: lastTime,
            count:unreadCount
        };
    });
    useEffect(()=>{
        const getConsultList=async()=>{
             const response =await GetChatList({token:token});
             SetChatList(response)
             console.log('모든채팅방 조회',response)
             //SetChatList(dummydata);
        }
        //상대방이 이름 나는 토큰값
        getConsultList();
    },[])
  return (
    <section className='chatlist'>
        <Gridwrap>
            <Header isVisible={true} link={-1}/>
            <h3>진행중인 상담</h3>
            <ul className='chatlist-card-wrap'>
                {processedChatList?.map((item,index)=>(
                    <Link key={index} to={`/chat/${item.opponentUser}`}>
                        <ChatListItem item={item} handleOnclick={()=>handleOnclick(item.roomId)}/>
                    </Link> 
                ))}
            </ul>
            
        </Gridwrap>
    </section>
  )
}

export default ChatList