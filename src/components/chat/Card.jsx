import React from 'react'
import star from '../../assets/chat/star.svg';

function Card(props) {
    console.log("card props:",props.consultData)
  return (
    <ul className='card-wrap'>
        {props.consultData.map((data,index)=>(
            <li key={index} className='card'>
                <p className='title'>{data.category}</p>
                <div className='content-wrap'>
                  <span className='profile'/>
                  <div className='info'>
                    <span className='rating-wrap'>
                      <img src={star} className='rating-img' alt='star' />
                      <p className='rating'>{data.rating}</p>
                    </span>
                    <span className='name-wrap'>
                      <p className='name'>{data.name}</p>
                      <p className='time'>{data.time}</p>
                    </span>
                    <p className='content'>{data.content}</p>
                  </div>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default Card