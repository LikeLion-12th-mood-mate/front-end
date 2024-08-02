import React from 'react'
import axios from 'axios'

async function PostComment({videoId,reviewText,rating}) {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/video/${videoId}/reviews`,{
            "reviewText": reviewText,
            "rating": '4.3',
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default PostComment