import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';

import Gridwrap from '../grid/Gridwrap';
import Header from '../chat/common/Header';
import getChatFind from '../../api/chat/conversation/getChatFind';
import { combineSlices } from '@reduxjs/toolkit';
import Loading from '../loading/loading';

function Conversation() {
  const { id } = useParams();
  
  const [chatHistory, setChatHistory] = useState([]);
  const [roomInfo, setRoomInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const token = sessionStorage.getItem('token');
  const roomId = sessionStorage.getItem('roomId');
  const nickname = sessionStorage.getItem('nickname')


  const client = useRef(null);
  const inputRef = useRef();
  const scrollRef = useRef();
  console.log(id);

  // 소켓 연결

  useEffect(() => {
    connect();

    return () => disconnect();
  }, [roomInfo]);


  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: 'ws://3.35.123.191:9001/stomp',
      onConnect: () => {
        subscribe();
      }
    });

    client.current.webSocketFactory = function () {
      return new SockJS("http://3.35.123.191:9001/stomp");
    };

    client.current.activate();
  };
  //메세지보내기
  const publish = async () => {
    console.log("message content: ", inputRef.current.value)
    if (!client.current.connected || inputRef.current.value.length === 0) return;
    console.log('publish on')
    try {
      await client.current.publish(
       {
        destination: "/app/message",
        body: JSON.stringify({
          roomid: roomId,
          user: roomInfo.user,
          content: inputRef.current.value,
          createAt: null,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log('Message published');
      inputRef.current.value = "";
    } catch (error) {
      console.error('Failed to publish message:', error);
    }
  };
  //구독
  const subscribe = () => {
    console.log("subscribe: " + client.current.connected);
    client.current.subscribe(`/subscribe/notice/${roomId}`, (body) => {
      console.log('Received message:', body.body);
      try {
        const json_body = JSON.parse(body.body);
        setChatHistory((prevChatHistory) => [...prevChatHistory, json_body]);
      } catch (error) {
        console.error('Failed to parse received message:', error);
      }
    });
  };
  const disconnect = () => {
    client.current.deactivate();
  };

  useEffect(() => {
    const getCounselorData = async () => {
      const response2 = await getChatFind({ query: roomId, token: token });
      console.log('채팅방확인', response2.data);
      setChatHistory(response2.data.histories);
      setRoomInfo(response2.data);
      setIsLoading(false);
    };
    getCounselorData();
  }, []);

  
  useEffect(() => {
    console.log('채팅기록: ', chatHistory);
  }, [chatHistory]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);
  return (
    <>{isLoading ? <Loading/>:
      <section className='conversation'>
      <div className='header-bg'>
        <Gridwrap>
          <Header link={-1} disconnect={disconnect} />
          <h3 className='name'>{id}</h3>
        </Gridwrap>
      </div>
      
      <Gridwrap>
        <div className='chat-history-wrap'>
          <ul className='history-wrap'>
            {chatHistory.map((item)=>
              (<div className={`${item.sender===nickname ? 'history':'history active'}`}>
                <li className={`${item.sender===nickname ? 'chat-history':'chat-history active'}`}>{item.message}</li>
              </div>))}
              <div ref={scrollRef}/>
          </ul>
        </div>
       
      </Gridwrap>


      <div className='conversation-input-wrap'>
        <input ref={inputRef}  className='conversation-input' placeholder='내용을 입력하세요' />
        <button type='button' className='conversation-submit' onClick={publish}>전송</button>
      </div>
    </section>
    }
    </>
   
  );
}

export default Conversation;
