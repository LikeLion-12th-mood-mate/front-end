import React from 'react'
import axios from 'axios'
async function GetAnalystData(props) {
    try{
        const response = await axios.get(`url`)
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetAnalystData