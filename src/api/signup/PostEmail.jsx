import React from 'react'
import axios from 'axios'
async function PostEmail(props) {
    try{
        const response = await axios.post(`url`,{

        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default PostEmail