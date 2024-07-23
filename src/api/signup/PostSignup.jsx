import React from 'react'
import axios from 'axios'
async function PostSignup({email,password}) {
    try{
        const response = await axios.post(`/user/register`,{
            "email":email,
            "password":password,
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default PostSignup