import React from 'react'
import axios from 'axios'
async function getChatMain({token}) {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/chat/main`,{
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