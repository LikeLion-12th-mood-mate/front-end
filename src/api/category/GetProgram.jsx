import React from 'react'
import axios from 'axios'

async function GetProgram(query) {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/program/search`,{
            params:{
                query:query
            }
        })
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default GetProgram