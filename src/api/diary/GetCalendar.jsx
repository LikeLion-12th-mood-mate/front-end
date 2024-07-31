import React from 'react'
import axios from 'axios'

async function GetCalendar({token}) {
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/diary/read`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetCalendar