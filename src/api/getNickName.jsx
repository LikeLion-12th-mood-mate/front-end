import React from 'react'
import axios from 'axios'
async function getNickName() {
    const token = sessionStorage.getItem('token')
    try{
        const response = await axios.get(`http://116.121.184.161:9001/api/v1/member/findNickname`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default getNickName