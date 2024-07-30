import React from 'react'
import axios from 'axios'
async function PostSignup({email,password,nickname}) {
    try{
        const response = await axios.post(`http://116.121.184.161:9001/api/v1/member/register`,{
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