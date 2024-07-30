import React from 'react'
import axios from 'axios'
//모든 채팅방 전체 조회
async function GetChatList({token}) {
    try{
        const response = await axios.get(`http://116.121.184.161:9001/chat/main`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetChatList