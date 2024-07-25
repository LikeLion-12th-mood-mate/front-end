import React from 'react'
import axios from 'axios'

async function GetCalendar() {
    try{
        const response = await axios.get(`url`)
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetCalendar