import React from 'react'
import axios from 'axios'

async function GetChatList() {
    try{
        const response = await axios.get(`url${props.id}`)
        return response.data
    }
    catch(error){
        return
    }
}

export default GetChatList