import React from 'react'

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