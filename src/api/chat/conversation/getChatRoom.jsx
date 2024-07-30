import React from 'react'
import axios from 'axios'
//채팅방 생성
async function getChatRoom({query,token}) {
    try{
        const response = await axios.get(`http://116.121.184.161:9001/chat/room`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                yournickname: query 
            }
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default getChatRoom