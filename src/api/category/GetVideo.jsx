import React from 'react';
import axios from 'axios'

async function GetVideo() {
  try{
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/video/`)
    return response.data
  }
  catch(error){
    return new Error(error)
  }
};

export default GetVideo;