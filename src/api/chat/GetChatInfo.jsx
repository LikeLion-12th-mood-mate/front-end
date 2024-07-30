import React from 'react'
import axios from 'axios'
async function GetChatInfo(query) {
    try{
        const response = await axios.get(`http://116.121.184.161:9001/api/counselor/search`,{
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