import React from 'react';
import axios from 'axios'

async function GetVideoOne(id) {
  try{
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/video/${id}`)
    return response.data
  }
  catch(error){
    return new Error(error)
}
};

export default GetVideoOne;