import React from 'react'
import axios from 'axios'
async function getChatFind({token,query}) {
    try{
        const response = await axios.get(`http://116.121.184.161:9001/chat/find`,{
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