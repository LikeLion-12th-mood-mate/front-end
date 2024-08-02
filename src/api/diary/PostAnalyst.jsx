import React from 'react'
import axios from 'axios'
async function PostAnalyst({month,time,content,analyze,emotion,token}) {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/diary/write`,{
            "month": month,
            "time": time,
            "content": content,
            "analyze": analyze,
            "emotion": emotion
          },
          {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default PostAnalyst