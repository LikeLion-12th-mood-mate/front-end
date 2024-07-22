import React from 'react'
import axios from 'axios'

async function GetCounselor(props) {
    try{
        const response = await axios.get(`url${props.id}`)
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetCounselor