import React from 'react'
import axios from 'axios'
async function getChatMain({token}) {
    try{
        const response = await axios.get(`http://116.121.184.161:9001/chat/main`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default getChatMain