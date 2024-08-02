import React from 'react'
import axios from 'axios'

async function GetCounselorData({id}) {
    try{
        const response = await axios.get(`url${id}`)
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetCounselorData