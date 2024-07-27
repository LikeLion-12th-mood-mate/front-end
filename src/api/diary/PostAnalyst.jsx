import React from 'react'
import axios from 'axios'
async function PostAnalyst(props) {
    try{
        const response = await axios.post(`url`,{
            "title": props.title,

            
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default PostAnalyst