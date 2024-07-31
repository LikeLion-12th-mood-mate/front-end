import React from 'react';
import axios from 'axios';
async function PostLogin({email,password}) {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/member/login`,{
            "email": email,
            "password": password
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default PostLogin