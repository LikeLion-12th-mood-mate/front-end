import React from 'react'
import axios from 'axios'

async function GetProgDt(programId) {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/program/${programId}`)
        return response
    }
    catch(error){
        return new Error(error)
    }
}

export default GetProgDt