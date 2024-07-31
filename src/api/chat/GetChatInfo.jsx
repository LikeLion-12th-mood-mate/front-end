import React from 'react'
import axios from 'axios'
async function GetChatInfo(query) {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/counselor/search`,{
            params:{
                query:query
            }
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetChatInfo