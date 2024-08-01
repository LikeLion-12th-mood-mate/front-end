import React from 'react';
import axios from 'axios'

async function GetVideo() {
  try{
    const response = await axios.get(`http://116.121.184.161:9001/api/video/`)
    return response.data
  }
  catch(error){
    return new Error(error)
}
};

export default GetVideo;