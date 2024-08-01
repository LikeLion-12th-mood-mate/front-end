import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Gridwrap from '../grid/Gridwrap';
import Header from '../chat/common/Header';
import GetChatList from '../../api/chatlist/GetChatList';
import ChatListItem from './ChatListItem';
import Loading from '../loading/loading';

function ChatList() {
    const [chatList,SetChatList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
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
             setIsLoading(false);
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
            {isLoading ? <Loading/> :
             <ul className='chatlist-card-wrap'>
             {processedChatList?.map((item,index)=>(
                 <Link key={index} to={`/chat/${item.opponentUser}`}>
                     <ChatListItem item={item} handleOnclick={()=>handleOnclick(item.roomId)}/>
                 </Link> 
             ))}
         </ul>
            }
           
            
        </Gridwrap>
    </section>
  )
}

export default ChatList