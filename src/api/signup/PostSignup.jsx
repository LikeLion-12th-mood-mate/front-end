import React from 'react'
import axios from 'axios'
async function PostSignup({email,password,nickname}) {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/member/register`,{
            "email":email,
            "nickname":nickname,
            "password":password,
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default PostSignup