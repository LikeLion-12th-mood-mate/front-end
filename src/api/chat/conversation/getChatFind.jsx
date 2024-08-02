import React from 'react'
import axios from 'axios'
//http://3.35.123.191:9001
//http://116.121.184.161:9001
async function getChatFind({token,query}) {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/chat/find`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params: {
                roomId: query 
            }
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default getChatFind