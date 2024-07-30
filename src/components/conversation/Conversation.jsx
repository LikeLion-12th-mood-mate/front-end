import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

import Gridwrap from '../grid/Gridwrap';
import Header from '../chat/common/Header';
import getChatFind from '../../api/chat/conversation/getChatFind';

function Conversation() {
  const { id } = useParams();
  
  const [chatHistory, setChatHistory] = useState([]);
  const [roomInfo, setRoomInfo] = useState();

  const token = sessionStorage.getItem('token');
  const roomId = sessionStorage.getItem('roomId');
  
  const client = useRef(null);
  const inputRef = useRef();
  console.log(id);

  // 소켓 연결
  const connectHandler = () => {
    const socket = new SockJS(`http://116.121.184.161:9001/stomp`);
    client.current = Stomp.over(socket);
    client.current.connect(
      {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      () => {
        console.log('연결성공');
        client.current.subscribe(
          `/subscribe/notice/${roomId}`,
          (message) => {
            console.log('수신한 메시지:', message);
            const jsonMessage = JSON.parse(message.body);
            console.log('메세지확인', jsonMessage);
            setChatHistory((prevHistory) => {
              return prevHistory ? [...prevHistory, jsonMessage] : [jsonMessage];
            });
          },
          {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          }
        );
      }
    );
  };

  const sendHandler = (event) => {
    if (event.key === 'Enter' && client.current && client.current.connected) {
      const messageContent = {
        roomId: roomId,
        user: roomInfo?.user,
        content: inputRef.current.value,
        createAt: null,
      };
      console.log('보내는 메시지 내용:', messageContent);
      client.current.send(
        '/app/message',
        {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        JSON.stringify(messageContent)
      );
      inputRef.current.value = '';
    }
  };

  const disconnect = () => {
    if (client.current) {
      client.current.disconnect();
      console.log('연결이 해제되었습니다.');
    }
  };

  useEffect(() => {
    const getCounselorData = async () => {
      const response2 = await getChatFind({ query: roomId, token: token });
      console.log('채팅방확인', response2.data);
      setChatHistory(response2.data.histories);
      setRoomInfo(response2.data);
    };
    getCounselorData();
  }, []);

  useEffect(() => {
    if (roomInfo) {
      connectHandler();
      return () => {
        disconnect();
      };
    }
  }, [roomInfo]);

  useEffect(() => {
    console.log('채팅기록: ', chatHistory);
  }, [chatHistory]);

  return (
    <section className='conversation'>
      <div className='header-bg'>
        <Gridwrap>
          <Header link={-1} disconnect={disconnect} />
          <h3 className='name'>{id}</h3>
        </Gridwrap>
      </div>

      <div className='conversation-input-wrap'>
        <input ref={inputRef} onKeyPress={sendHandler} className='conversation-input' placeholder='내용을 입력하세요' />
      </div>
    </section>
  );
}

export default Conversation;
